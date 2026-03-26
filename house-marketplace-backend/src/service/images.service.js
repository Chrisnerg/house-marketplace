import { eq } from 'drizzle-orm';
import db from '../db/index.js';
import { imagesTable } from '../model/properties_images.model.js';

export const postImage = async (propertyId, imageURL) => {
    const [image] = await db
        .insert(imagesTable)
        .values({ propertyId, imageURL })
        .returning({
            imageId: imagesTable.id,
        });

    return image;
};

export const getImages = async (propertyId) => {
    const images = await db
        .select()
        .from(imagesTable)
        .where(eq(imagesTable.propertyId, propertyId));

    return images;
};

export const deleteImage = async (imageId) => {
    const [deletedImage] = await db
        .delete(imagesTable)
        .where(eq(imagesTable.id, imageId))
        .returning({
            imageId: imagesTable.id,
            propertyId: imagesTable.propertyId,
            imageURL: imagesTable.imageURL,
        });

    return deletedImage ?? null;
};