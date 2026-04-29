import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, bigint } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * File storage metadata table.
 * Stores references to files uploaded to S3 with associated metadata.
 */
export const backroomFiles = mysqlTable("backroom_files", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  /** Unique storage key in S3 (e.g., 'user-123/level-0-archive.pdf') */
  fileKey: varchar("fileKey", { length: 512 }).notNull().unique(),
  /** Public-facing filename for downloads */
  fileName: varchar("fileName", { length: 255 }).notNull(),
  /** MIME type (e.g., 'application/pdf', 'image/png') */
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  /** File size in bytes */
  fileSizeBytes: bigint("fileSizeBytes", { mode: "number" }).notNull(),
  /** Public URL for direct access */
  url: text("url").notNull(),
  /** Associated Backrooms level (0-100) for context */
  levelId: int("levelId"),
  /** File category: archive, evidence, document, media, etc. */
  category: varchar("category", { length: 50 }).default("archive").notNull(),
  /** Optional description of file contents */
  description: text("description"),
  /** Upload timestamp */
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  /** Last access timestamp */
  lastAccessedAt: timestamp("lastAccessedAt").defaultNow().notNull(),
});

export type BackroomFile = typeof backroomFiles.$inferSelect;
export type InsertBackroomFile = typeof backroomFiles.$inferInsert;

/**
 * File access log for audit trail.
 * Tracks who accessed which files and when.
 */
export const fileAccessLogs = mysqlTable("file_access_logs", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  fileId: int("fileId").notNull(),
  /** Action: download, view, share, delete */
  action: varchar("action", { length: 50 }).notNull(),
  /** IP or user agent for forensics */
  metadata: text("metadata"),
  accessedAt: timestamp("accessedAt").defaultNow().notNull(),
});

export type FileAccessLog = typeof fileAccessLogs.$inferSelect;
export type InsertFileAccessLog = typeof fileAccessLogs.$inferInsert;