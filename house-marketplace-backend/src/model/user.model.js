import { pgTable, timestamp, varchar, text, uuid, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("user_role", ["user", "agency", "admin"])

export const usersTable = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),

    fullName: varchar({ length: 255 }).notNull(),

    email: varchar({ length: 255 }).notNull().unique(),
    phone: varchar({ length: 10 }).notNull().unique(),

    role: roleEnum("role").default("user").notNull(),

    avatarURL: varchar(),

    salt: text().notNull(),
    password: text().notNull(),

    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: text().$onUpdate(() => new Date()),
});