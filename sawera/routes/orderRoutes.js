import express from 'express';
import { createOrder, getOrderById, getAllOrders, updateOrderStatus, deleteOrder } from '../controllers/orderController.js';
import { isAuthenticated, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create an order
router.post('/', isAuthenticated, createOrder);

// Get order by ID
router.get('/:orderId', isAuthenticated, getOrderById);

// Get all orders (Admin only)
router.get('/', isAdmin, getAllOrders);

// Update order status (Admin only)
router.put('/:orderId/status', isAdmin, updateOrderStatus);

// Delete order (Admin only)
router.delete('/:orderId', isAdmin, deleteOrder);

export default router;
