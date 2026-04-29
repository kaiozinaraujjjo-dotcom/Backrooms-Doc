CREATE TABLE `backroom_files` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`fileKey` varchar(512) NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`mimeType` varchar(100) NOT NULL,
	`fileSizeBytes` bigint NOT NULL,
	`url` text NOT NULL,
	`levelId` int,
	`category` varchar(50) NOT NULL DEFAULT 'archive',
	`description` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`lastAccessedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `backroom_files_id` PRIMARY KEY(`id`),
	CONSTRAINT `backroom_files_fileKey_unique` UNIQUE(`fileKey`)
);
--> statement-breakpoint
CREATE TABLE `file_access_logs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`fileId` int NOT NULL,
	`action` varchar(50) NOT NULL,
	`metadata` text,
	`accessedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `file_access_logs_id` PRIMARY KEY(`id`)
);
