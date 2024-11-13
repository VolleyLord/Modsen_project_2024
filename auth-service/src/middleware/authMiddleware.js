import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

export default (req, res, next) => {
    // Получаем токен из заголовка Authorization с префиксом Bearer
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    // Проверяем токен в cookie, если он не найден в заголовке
    const tokenFromCookie = req.cookies && req.cookies.token;

    // Выбираем токен из заголовка, либо из cookie
    const finalToken = token || tokenFromCookie;

    if (!finalToken) {
        return res.status(403).json({ message: 'Token required' });
    }

    jwt.verify(finalToken, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
};
