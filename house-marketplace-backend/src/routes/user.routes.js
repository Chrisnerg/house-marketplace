import express from 'express';

const router = express.Router();

router.post('/sign-up', registerUser);

router.post('/login', loginUser);

export default router;