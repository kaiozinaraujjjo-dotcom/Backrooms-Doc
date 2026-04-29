import { useState, useCallback } from "react";
import { trpc } from "@/lib/trpc";

export interface FileUploadOptions {
  fileName: string;
  mimeType: string;
  fileData: string; // base64 encoded
  levelId?: number;
  category?: string;
  description?: string;
}

export function useFileStorage() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Query hooks
  const filesQuery = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation();
  const deleteMutation = trpc.files.delete.useMutation();
  const getByIdQuery = trpc.files.getById.useQuery;

  // Upload file from File object
  const uploadFile = useCallback(
    async (file: File, options?: Partial<FileUploadOptions>) => {
      setIsUploading(true);
      setError(null);
      setUploadProgress(0);

      try {
        // Read file as base64
        const reader = new FileReader();
        reader.onprogress = (e) => {
          if (e.lengthComputable) {
            setUploadProgress((e.loaded / e.total) * 50); // 0-50% for reading
          }
        };

        const fileData = await new Promise<string>((resolve, reject) => {
          reader.onload = () => {
            const result = reader.result as string;
            const base64 = result.split(",")[1] || result;
            resolve(base64);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        setUploadProgress(50);

        // Upload via tRPC
        const result = await uploadMutation.mutateAsync({
          fileName: options?.fileName || file.name,
          mimeType: options?.mimeType || file.type,
          fileData,
          levelId: options?.levelId,
          category: options?.category,
          description: options?.description,
        });

        setUploadProgress(100);

        // Invalidate files list to refresh
        await filesQuery.refetch();

        return result;
      } catch (err) {
        const message = err instanceof Error ? err.message : "Upload failed";
        setError(message);
        throw err;
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
    },
    [uploadMutation, filesQuery]
  );

  // Delete file
  const deleteFile = useCallback(
    async (fileId: number) => {
      try {
        setError(null);
        await deleteMutation.mutateAsync({ fileId });
        await filesQuery.refetch();
        return true;
      } catch (err) {
        const message = err instanceof Error ? err.message : "Delete failed";
        setError(message);
        throw err;
      }
    },
    [deleteMutation, filesQuery]
  );

  // Download file (navigate to URL)
  const downloadFile = useCallback((url: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return {
    // State
    isUploading,
    uploadProgress,
    error,

    // Data
    files: filesQuery.data || [],
    isLoadingFiles: filesQuery.isLoading,

    // Methods
    uploadFile,
    deleteFile,
    downloadFile,
    refetchFiles: filesQuery.refetch,
  };
}
