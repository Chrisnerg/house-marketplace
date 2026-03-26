import { deleteImage, getImages, postImage } from '../service/images.service.js';

export const addImage = async (req, res) => {
    try {
        const { propertyId } = req.params;
        const { imageURL } = req.body;

        if (!imageURL || typeof imageURL !== 'string' || !imageURL.trim()) {
            return res.status(400).json({ error: 'imageURL is required.' });
        }

        const image = await postImage(propertyId, imageURL.trim());

        return res.status(201).json({ data: image });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to add image.' });
    }
};

export const getPropertyImages = async (req, res) => {
    try {
        const { propertyId } = req.params;

        const images = await getImages(propertyId);

        return res.json({ data: images });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to get property images.' });
    }
};

export const removeImage = async (req, res) => {
    try {
        const { imageId } = req.params;

        const deletedImage = await deleteImage(imageId);

        if (!deletedImage) {
            return res.status(404).json({ error: 'Image not found.' });
        }

        return res.json({ data: deletedImage });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to remove image.' });
    }
};
