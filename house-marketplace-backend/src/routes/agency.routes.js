import express from 'express';
import {
  getAgencyById,
  getAllAgencies,
  registerAgency,
} from '../controller/agency.controller.js';

const router = express.Router();

router.post('/agencies', registerAgency);
router.get('/agencies', getAllAgencies);
router.get('/agencies/:id', getAgencyById);

export default router;
