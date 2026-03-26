import {
    findPropertyById,
    findRentProperties,
    findSellProperties as findSellPropertiesService,
    findSoldListings as findSoldListingsService,
    getAllListings,
    postProperty,
} from "../service/properties.service.js";

// Future improvements -> Check if the agencyId exists in the DB.
export const registerProperty = async (req, res) => {
    try {
        const { title, price, status, featured, features, locationName, latitude, longitude, placeId, agencyId, imageURLs } = req.body;

        const property = await postProperty(
            title, price, status, featured, features,
            locationName, latitude, longitude, placeId, agencyId,
            Array.isArray(imageURLs) ? imageURLs : [],
        );

        return res.status(201).json({ data: property })
    } catch (error) {
        return res.status(400).json({ error: 'Unable to register property.'});
    };
};

export const getAllProperties = async (req, res) => {
    try {
        const properties = await getAllListings();
        return res.json({ data: properties });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to get properties.'});
    }
};

export const getRentProperties = async (req, res) => {
    try {
        const rentProperties = await findRentProperties();

        return res.json({ data: rentProperties});
    } catch (error) {
        return res.status(400).json({ error: 'Failed to get rented properties.'})
    }
};

export const getSellProperties = async (req, res) => {
    try {
        const sellProperties = await findSellPropertiesService();

        return res.json({ data: sellProperties});
    } catch (error) {
        return res.status(400).json({ error: 'Failed to get selling properties.'})
    }
};

export const getSoldListings = async (req, res) => {
    try {
        const soldProperties = await findSoldListingsService();

        return res.json({ data: soldProperties});
    } catch (error) {
        return res.status(400).json({ error: 'Failed to get sold properties.'})
    }
};

export const getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await findPropertyById(Number(id));

        if (!property) {
            return res.status(404).json({ error: 'Property not found.' });
        }

        return res.json({ data: property });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to get the property.'})
    }
};
