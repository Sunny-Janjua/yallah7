import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} from "../controllers/productController.js";
import {
  isAuthenticated,
  isAdmin,
  isSeller,
} from "../middlewares/authMiddleware.js";
const router = Router();

// Get all products
router.get("/", getAllProducts);

// Get product by ID
router.get("/:productId", getProductById);

// Get products by category
router.get("/category/:categoryId", getProductsByCategory);

// Add a product (Admin/Seller only)
router.post("/", isSeller, addProduct);

// Update product (Admin/Seller only)
router.put("/:productId", isSeller, updateProduct);

// Delete product (Admin/Seller only)
router.delete("/:productId", isSeller, deleteProduct);

export default router;
