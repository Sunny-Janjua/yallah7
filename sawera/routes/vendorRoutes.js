import { Router } from "express";
import {
  getAllVendors,
  getVendorById,
  createVendor,
  updateVendor,
  deleteVendor,
  getVendorProducts,
} from "../controllers/vendorController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";
const router = Router();

// Get all vendors (Admin-only)
router.get("/", isAdmin, getAllVendors);

// Get vendor by ID (Admin-only)
router.get("/:vendorId", isAdmin, getVendorById);

// Create vendor profile (Admin-only)
router.post("/", isAdmin, createVendor);

// Update vendor profile (Admin-only)
router.put("/:vendorId", isAdmin, updateVendor);

// Delete vendor profile (Admin-only)
router.delete("/:vendorId", isAdmin, deleteVendor);

// Get products of a vendor
router.get("/:vendorId/products", isAuthenticated, getVendorProducts);

export default router;
