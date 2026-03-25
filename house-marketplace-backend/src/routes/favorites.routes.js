import express from 'express';
import { addToFavorites, getUserFavorites, removeFavorite } from '../controller/favorites.controller.js';
import { authenticateUser } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/favorites', authenticateUser, addToFavorites);
router.get('/favorites', authenticateUser, getUserFavorites);
router.delete('/favorites/:propertyId', authenticateUser, removeFavorite);

export default router;
