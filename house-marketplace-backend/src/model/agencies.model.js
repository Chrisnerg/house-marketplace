import { boolean, integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const agencyVerificationEnum = pgEnum("agency_verification_status", ["pending", "verified", "rejected"]);

export const agenciesTable = pgTable("agencies", {
    id: uuid().primaryKey().defaultRandom(),

    agencyName: varchar({ length: 255 }).notNull(),

    licenseNumber: varchar({ length: 120 }).notNull().unique(),

    officeAddress: text().notNull(),

    website: varchar({ length: 255 }),

    yearsInBusiness: integer().default(0).notNull(),

    verificationStatus: agencyVerificationEnum("verification_status").default("pending").notNull(),
    isVerified: boolean().default(false).notNull(),

    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
});