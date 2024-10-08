import { Router } from "express";
import {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
  getSellerProducts,
} from "../controllers/sellerController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";
const router = Router();

// Get all sellers (Admin-only)
router.get("/", isAdmin, getAllSellers);

// Get seller by ID (Admin-only)
router.get("/:sellerId", isAdmin, getSellerById);

// Create seller profile (Admin-only)
router.post("/", isAdmin, createSeller);

// Update seller profile (Admin-only)
router.put("/:sellerId", isAdmin, updateSeller);

// Delete seller profile (Admin-only)
router.delete("/:sellerId", isAdmin, deleteSeller);

// Get products of a seller (Admin/Seller)
router.get("/:sellerId/products", isAuthenticated, getSellerProducts);

export default router;
