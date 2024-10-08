import { Router } from "express"; // Import Router from express
import {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
  deleteUser,
} from "../controllers/userController.js"; // Import user controller functions
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js"; // Import authentication middlewares

const router = Router(); // Create a new Router instance

// Get user profile (User)
router.get("/me", isAuthenticated, getUserProfile); // Route for getting the authenticated user's profile

// Update user profile (User)
router.put("/me", isAuthenticated, updateUserProfile); // Route for updating the authenticated user's profile

// Get all users (Admin-only)
router.get("/", isAuthenticated, isAdmin, getAllUsers); // Ensure the user is authenticated before checking for admin access

// Get user by ID (Admin-only)
router.get("/:userId", isAuthenticated, isAdmin, getUserById); // Ensure the user is authenticated before checking for admin access

// Delete user (Admin-only)
router.delete("/:userId", isAuthenticated, isAdmin, deleteUser); // Ensure the user is authenticated before checking for admin access

export default router; // Export the router
