import { and, eq } from 'drizzle-orm';
import db from '../db/index.js';
import { favoritesTable } from '../model/favorites.model.js';
import { propertiesTable } from '../model/properties.model.js';

export const fetchFavorites = async (userId, propertyId) => {
    const userFavorites = await db
        .select({
            propertyId: propertiesTable.id,
            title: propertiesTable.title,
            price: propertiesTable.price,
            status: propertiesTable.status,
            featured: propertiesTable.featured,
            features: propertiesTable.features,
            locationName: propertiesTable.locationName,
        })
        .from(favoritesTable)
        .innerJoin(propertiesTable, eq(favoritesTable.propertyId, propertiesTable.id))
        .where(
            propertyId
                ? and(eq(favoritesTable.userId, userId), eq(favoritesTable.propertyId, propertyId))
                : eq(favoritesTable.userId, userId),
        );

    return userFavorites;
};

export const postFavorites = async (userId, propertyId) => {
    const [favorite] = await db
        .insert(favoritesTable)
        .values({
            userId,
            propertyId,
        })
        .onConflictDoNothing({
            target: [favoritesTable.userId, favoritesTable.propertyId],
        })
        .returning({
            userId: favoritesTable.userId,
            propertyId: favoritesTable.propertyId,
        });

    if (favorite) {
        return {
            created: true,
            favorite,
        };
    }

    return {
        created: false,
        favorite: {
            userId,
            propertyId,
        },
    };
};

export const deleteFavorite = async (userId, propertyId) => {
    const [deletedFavorite] = await db
        .delete(favoritesTable)
        .where(and(eq(favoritesTable.userId, userId), eq(favoritesTable.propertyId, propertyId)))
        .returning({
            userId: favoritesTable.userId,
            propertyId: favoritesTable.propertyId,
        });

    return deletedFavorite ?? null;
};