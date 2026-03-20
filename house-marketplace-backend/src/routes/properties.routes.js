import express from 'express';
import { propertiesTable } from '../model';

const router = express.Router();

router.get('/properties', getAllProperties);

export default router;