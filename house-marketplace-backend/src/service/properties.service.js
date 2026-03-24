import { eq } from "drizzle-orm";
import db from "../db/index.js";
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
) => {
  const [property] = await db
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

  return property.propertyId;
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
