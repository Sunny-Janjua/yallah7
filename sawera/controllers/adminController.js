import { User } from '../models/userModel.js';
import { Product } from '../models/productModel.js';
import Order from '../models/Order.js';
import { seller } from '../models/sellerModel.js';
// Get admin dashboard overview
export const getAdminDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalsellers = await seller.countDocuments();
    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalProducts,
        totalOrders,
        totalsellers
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}