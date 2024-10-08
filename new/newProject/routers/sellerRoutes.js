// routers/sellerRoutes.js
import express from "express";
import { registerSeller, getSellerDetails, updateSellerProfile, addSellerProduct, handleSellerTransaction } from "../controllers/sellerController.js";
import verifyToken from "../middlewares/verifyToken.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// Register Seller (Assuming this is an additional step after user registration)
router.post(
  "/register",
  verifyToken,
  authMiddleware,
  roleMiddleware("user"),
  registerSeller
);

// Get Seller Details
router.get(
  "/:sellerId",
  verifyToken,
  authMiddleware,
  roleMiddleware("seller", "admin"),
  getSellerDetails
);

// Update Seller Profile
router.put(
  "/:sellerId",
  verifyToken,
  authMiddleware,
  roleMiddleware("seller", "admin"),
  updateSellerProfile
);

// Add Product to Seller's Store
router.post(
  "/add-product",
  verifyToken,
  authMiddleware,
  roleMiddleware("seller", "admin"),
  addSellerProduct
);

// Handle Wallet Transactions
router.post(
  "/wallet/transaction",
  verifyToken,
  authMiddleware,
  roleMiddleware("seller", "admin"),
  handleSellerTransaction
);

export default router;
