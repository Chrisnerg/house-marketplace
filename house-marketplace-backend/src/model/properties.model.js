import { varchar, uuid, timestamp, text, pgTable, pgEnum, boolean, doublePrecision } from "drizzle-orm/pg-core";
import { agenciesTable } from "./agencies.model.js";

export const statusEnum = pgEnum("property_status", ["for-sale", "for-rent", "sold", "un-available", "active"]);

export const propertiesTable = pgTable("properties", {
    id: uuid().primaryKey().defaultRandom(),
    agencyId: uuid().references(() => agenciesTable.id).notNull(),

    title: varchar({ length: 150 }).notNull(),
    price: varchar().notNull(),

    status: statusEnum("status").default("active").notNull(),

    featured: boolean().default(false),

    features: text().array(),

    locationName: text("location_name"),
    latitude: doublePrecision("latitude"),
    longitude: doublePrecision("longitude"),
    placeId: text("place_id"),

    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: text().$onUpdate(() => new Date()),
});