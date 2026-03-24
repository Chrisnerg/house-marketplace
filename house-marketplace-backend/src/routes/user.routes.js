import express from 'express';
import { loginUser, registerUser } from '../controller/users.controller.js';

const router = express.Router();

router.post('/sign-up', registerUser);

router.post('/login', loginUser);

export default router;