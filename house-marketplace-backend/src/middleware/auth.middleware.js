import jwt from 'jsonwebtoken';

const JWT_SECRETE = process.env.JWT_ACCESS_TOKEN_SECRETE;

export const authenticateUser = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authentication required.' });
        }

        const token = authorization.split(' ')[1];
        const payload = jwt.verify(token, JWT_SECRETE);

        if (!payload?.userId) {
            return res.status(401).json({ error: 'Invalid token payload.' });
        }

        req.userId = payload.userId;
        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token.' });
    }
};
