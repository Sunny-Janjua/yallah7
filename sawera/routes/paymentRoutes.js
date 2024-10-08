import express from 'express';
import { initiatePayment, verifyPayment, refundPayment } from '../controllers/paymentController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Initiate a payment
router.post('/initiate', isAuthenticated, initiatePayment);

// Verify a payment
router.post('/verify', isAuthenticated, verifyPayment);

// Refund a payment
router.post('/refund', isAuthenticated, refundPayment);

export default router;
