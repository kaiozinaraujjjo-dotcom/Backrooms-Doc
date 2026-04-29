import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { storagePut } from "./storage";
import { createFile, getUserFiles, getFileById, deleteFile, logFileAccess } from "./db";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // File storage router
  files: router({
    // List all files for the current user
    list: protectedProcedure.query(async ({ ctx }) => {
      return await getUserFiles(ctx.user.id);
    }),

    // Get a specific file by ID
    getById: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .query(async ({ ctx, input }) => {
        const file = await getFileById(input.fileId);
        if (!file) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "File not found",
          });
        }
        // Verify ownership
        if (file.userId !== ctx.user.id && ctx.user.role !== "admin") {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "You do not have access to this file",
          });
        }
        // Log access
        await logFileAccess({
          userId: ctx.user.id,
          fileId: input.fileId,
          action: "view",
          metadata: JSON.stringify({ userAgent: ctx.req.headers["user-agent"] }),
        });
        return file;
      }),

    // Upload a file (expects base64 encoded data)
    upload: protectedProcedure
      .input(
        z.object({
          fileName: z.string().min(1).max(255),
          mimeType: z.string().min(1).max(100),
          fileData: z.string(), // base64 encoded
          levelId: z.number().optional(),
          category: z.string().default("archive"),
          description: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          // Decode base64 to buffer
          const buffer = Buffer.from(input.fileData, "base64");
          const fileSizeBytes = buffer.length;

          // Validate file size (max 50MB)
          const maxSize = 50 * 1024 * 1024;
          if (fileSizeBytes > maxSize) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "File size exceeds 50MB limit",
            });
          }

          // Generate unique storage key
          const timestamp = Date.now();
          const fileKey = `user-${ctx.user.id}/level-${input.levelId || "archive"}/${timestamp}-${input.fileName}`;

          // Upload to S3
          const { url } = await storagePut(fileKey, buffer, input.mimeType);

          // Create database record
          const file = await createFile({
            userId: ctx.user.id,
            fileKey,
            fileName: input.fileName,
            mimeType: input.mimeType,
            fileSizeBytes,
            url,
            levelId: input.levelId,
            category: input.category,
            description: input.description,
          });

          // Log access
          await logFileAccess({
            userId: ctx.user.id,
            fileId: file?.id || 0,
            action: "upload",
            metadata: JSON.stringify({ fileName: input.fileName, size: fileSizeBytes }),
          });

          return file;
        } catch (error) {
          console.error("[Upload Error]", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to upload file",
          });
        }
      }),

    // Delete a file
    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const file = await getFileById(input.fileId);
        if (!file) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "File not found",
          });
        }

        // Verify ownership
        if (file.userId !== ctx.user.id && ctx.user.role !== "admin") {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "You do not have permission to delete this file",
          });
        }

        const deleted = await deleteFile(input.fileId);
        if (!deleted) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to delete file",
          });
        }

        // Log access
        await logFileAccess({
          userId: ctx.user.id,
          fileId: input.fileId,
          action: "delete",
          metadata: JSON.stringify({ fileName: file.fileName }),
        });

        return { success: true };
      }),

    // Get file access logs (admin only)
    getLogs: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .query(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Only admins can view file access logs",
          });
        }

        const file = await getFileById(input.fileId);
        if (!file) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "File not found",
          });
        }

        return await logFileAccess({
          userId: ctx.user.id,
          fileId: input.fileId,
          action: "view_logs",
          metadata: JSON.stringify({}),
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
