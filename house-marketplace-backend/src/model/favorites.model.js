import { pgTable, primaryKey, timestamp, uuid } from "drizzle-orm/pg-core";
import { usersTable } from "./user.model";
import { propertiesTable } from "./properties.model";

export const favoritesTable = pgTable("favorites", {
    userId: uuid().references(() => usersTable.id).notNull(),
    propertyId: uuid().references(() => propertiesTable.id).notNull(),

    createdAt: timestamp().defaultNow().notNull(),
}, (table) => ({
    pk: primaryKey({ columns: [table.userId, table.propertyId] }),
}));