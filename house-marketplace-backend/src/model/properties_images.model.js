import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { propertiesTable } from "./properties.model.js";

export const imagesTable = pgTable("properties_images", {
    id: uuid().primaryKey().defaultRandom(),
    propertyId: uuid().references(() => propertiesTable.id).notNull(),

    imageURL: text(),

    createdAt: timestamp().defaultNow().notNull(),
});