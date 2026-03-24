import express from 'express';
import {
	getAllProperties,
	getPropertyById,
	getRentProperties,
	getSellProperties,
	getSoldListings,
	registerProperty,
} from '../controller/properties.controller.js';

const router = express.Router();

router.post('/properties', registerProperty);
router.get('/properties', getAllProperties);
router.get('/properties/rent', getRentProperties);
router.get('/properties/sell', getSellProperties);
router.get('/properties/sold', getSoldListings);
router.get('/properties/:id', getPropertyById);

export default router;