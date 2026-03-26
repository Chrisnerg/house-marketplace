import express from 'express';
import { addImage, getPropertyImages, removeImage } from '../controller/images.controller.js';
import { authenticateUser } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/properties/:propertyId/images', authenticateUser, addImage);
router.get('/properties/:propertyId/images', getPropertyImages);
router.delete('/properties/:propertyId/images/:imageId', authenticateUser, removeImage);

export default router;
