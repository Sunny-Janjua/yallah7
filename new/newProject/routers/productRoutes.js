// routers/productRoutes.js
import express from "express";
import productController from "../controllers/productController.js";
import verifyToken from "../middlewares/verifyToken.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import { upload } from "../middlewares/multerMiddleware.js";

const router = express.Router();

// Create a new product (single or multiple images)
router.post(
  "/",
  verifyToken,
  authMiddleware,
  roleMiddleware("seller", "admin"),
  upload.array('images', 5), // Maximum 5 images
  productController.createProduct
);

// Get all products
router.get("/", productController.getAllProducts);

// Get a single product by ID
router.get("/:productId", productController.getProductById);

// Update a product
router.put(
  "/:productId",
  verifyToken,
  authMiddleware,
  roleMiddleware("seller", "admin"),
  upload.array('images', 5), // Optional image update
  productController.updateProduct
);

// Delete a product
router.delete(
  "/:productId",
  verifyToken,
  authMiddleware,
  roleMiddleware("seller", "admin"),
  productController.deleteProduct
);

export default router;
