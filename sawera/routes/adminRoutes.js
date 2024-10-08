import express from 'express';
import { getAdminDashboard } from '../controllers/adminController.js';
import { isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Get admin dashboard overview
router.get('/dashboard', isAdmin, getAdminDashboard);

export default router;
