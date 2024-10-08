import jwt from 'jsonwebtoken';

// Generate a JWT token
export const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1d',  // Token expiry time
    });
};

// Verify a JWT token
export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};
