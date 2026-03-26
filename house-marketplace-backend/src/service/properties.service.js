import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { imagesTable } from "../model/properties_images.model.js";
import { propertiesTable } from "../model/properties.model.js";

export const findRentProperties = async () => {
  const properties = await db
    .select()
    .from(propertiesTable)
    .where(eq(propertiesTable.status, "for-rent"));

  return properties;
};

export const findSellProperties = async () => {
  const properties = await db
    .select()
    .from(propertiesTable)
    .where(eq(propertiesTable.status, "for-sale"));

  return properties;
};

export const findSoldListings = async () => {
  const properties = await db
    .select()
    .from(propertiesTable)
    .where(eq(propertiesTable.status, "sold"));

  return properties;
};

export const postProperty = async (
  title,
  price,
  status,
  featured,
  features,
  locationName,
  latitude,
  longitude,
  placeId,
  agencyId,
  imageURLs = [],
) => {
  const propertyId = await db.transaction(async (tx) => {
    const [property] = await tx
      .insert(propertiesTable)
      .values({
        title,
        price,
        status,
        featured,
        features,
        locationName,
        latitude,
        longitude,
        placeId,
        agencyId,
      })
      .returning({
        propertyId: propertiesTable.id,
      });

    if (imageURLs.length > 0) {
      await tx.insert(imagesTable).values(
        imageURLs.map((imageURL) => ({ propertyId: property.propertyId, imageURL })),
      );
    }

    return property.propertyId;
  });

  return propertyId;
};

export const findPropertyById = async (propertyId) => {
  const [property] = await db
    .select()
    .from(propertiesTable)
    .where(eq(propertiesTable.id, propertyId));

  return property;
};

export const getAllListings = async () => {
  const properties = await db.select().from(propertiesTable);

  return properties;
};
