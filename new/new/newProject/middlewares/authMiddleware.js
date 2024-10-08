import User from "../models/userModel.js";
import Vendor from "../models/venderModel.js";
import Admin from "../models/adminModel.js";

const authMiddleware = async (req, res, next) => {
  const { id, role } = req.user;

  try {
    let user;
    switch (role) {
      case 'user':
        user = await User.findById(id).select('-password');
        break;
      case 'vendor':
        user = await Vendor.findById(id).select('-password');
        break;
      case 'admin':
        user = await Admin.findById(id).select('-password');
        break;
      default:
        return res.status(401).json({ message: 'Invalid user role.' });
    }

    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Error in authMiddleware:', error);
    return res.status(401).json({ message: 'Authentication failed.' });
  }
};

export default authMiddleware;
