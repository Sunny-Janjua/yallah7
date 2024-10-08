import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  // First check if token is in cookies, otherwise check Authorization header
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized, token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user data to req.user
    console.log("Authenticated user:", req.user); // Shows the user role in the console for debugging
    next();
  } catch (error) {
    console.error("JWT Error:", error); // Log the error for debugging
    return res.status(401).json({ success: false, message: 'Unauthorized, token invalid' });
  }
};

// Admin role middleware
export const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Forbidden, admin access only' });
  }
  next();
};

// Seller role middleware
export const isSeller = (req, res, next) => {
  if (!req.user || req.user.role !== 'seller') {
    return res.status(403).json({ success: false, message: 'Forbidden, seller access only' });
  }
  next();
};
