import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
    console.log('Cookies:', req.cookies);
    console.log('Authorization header:', req.headers['authorization']);

    // извлекаем токен из cookies или заголовка Authorization
    const token =
        req.cookies?.token ||
        req.headers['authorization']?.split(' ')[1];

    if (!token) {
        console.log('Token not found');
        return res.status(403).json({ message: 'Token required' });
    }

    // Проверка токена
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log('Token verification failed:', err.message);
            return res.status(401).json({ message: 'Invalid token' });
        }

        console.log('Token successfully verified:', decoded);
        req.user = decoded;
        next();
    });
};

export default authMiddleware;
