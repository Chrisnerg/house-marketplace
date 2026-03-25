import { postFavorites, fetchFavorites, deleteFavorite } from '../service/favorites.service.js';

export const addToFavorites = async (req, res) => {
    try {
        const { propertyId } = req.body;
        const userId = req.userId;

        if (![userId, propertyId].every((field) => typeof field === 'string' && field.trim())) {
            return res.status(400).json({ error: 'propertyId is required.' });
        }

        const userFavorites = await postFavorites(userId.trim(), propertyId.trim());

        return res.status(userFavorites.created ? 201 : 200).json({ data: userFavorites });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to add property to favorites.' });
    }
};

export const getUserFavorites = async (req, res) => {
    try {
        const userId = req.userId;
        const { propertyId } = req.query;

        if (typeof userId !== 'string' || !userId.trim()) {
            return res.status(401).json({ error: 'Authentication required.' });
        }

        const userFavorites = await fetchFavorites(
            userId.trim(),
            typeof propertyId === 'string' && propertyId.trim() ? propertyId.trim() : undefined,
        );

        return res.json({ data: userFavorites });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to fetch user favorites.' });
    }
};

export const removeFavorite = async (req, res) => {
    try {
        const userId = req.userId;
        const { propertyId } = req.params;

        if (![userId, propertyId].every((field) => typeof field === 'string' && field.trim())) {
            return res.status(400).json({ error: 'propertyId is required.' });
        }

        const favorite = await deleteFavorite(userId.trim(), propertyId.trim());

        if (!favorite) {
            return res.status(404).json({ error: 'Favorite not found.' });
        }

        return res.json({ data: favorite });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to remove favorite.' });
    }
};