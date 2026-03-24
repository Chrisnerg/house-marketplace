import { createHmac, randomBytes } from 'node:crypto';
import { postUser } from '../service/users.service.js';
import { findUserByEmail } from '../service/users.service.js';
import jwt from 'jsonwebtoken';

const JWT_SECRETE = process.env.JWT_ACCESS_TOKEN_SECRETE;

export const registerUser = async (req, res) => {
    try {
        const { fullName, email, phone, role, avatarURL, password } = req.body;

        if (![fullName, email, phone, role, password].every((field) => typeof field === 'string' && field.trim())) {
            return res.status(400).json({ error: 'All fields are required.'});
        };

        const salt = randomBytes(256).toString('hex');
        const hashedPassword = createHmac('sha256', salt).update(password).digest('hex');

       const userId = await postUser(fullName.trim(), email.trim(), phone.trim(), role.trim(), avatarURL, salt, hashedPassword);

       return res.status(201).json({ data: { userId } });
    } catch (error) {
        return res.status(500).json({ error: 'Unable to complete sign up right now.'});
    }
};

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await findUserByEmail(email);

        if(!user) {
            return res.status(400).json({ error: 'Could not find user.'})
        };

        const newPassword = createHmac('sha256', user.salt).update(password).digest('hex');

        if(newPassword !== user.password) {
            return res.status(400).json({ error: 'Incorrect password entered.'});
        };

        const token = jwt.sign({ userId: user.id }, JWT_SECRETE);

        return res.json({ token });
    } catch (error) {
        return res.status(500).json({ error: 'Unable to complete login.' });
    }
};