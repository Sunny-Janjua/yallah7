import express from "express";
import authController from "../controllers/authController.js";
import { registerValidation } from "../validators/authValidator.js";
import { loginValidation } from "../validators/authValidator.js";
import { validationResult } from "express-validator";

const router = express.Router();

// Middleware to handle validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// User Registration
router.post("/register/user", registerValidation, handleValidation, authController.registerUser);

// Vendor Registration
router.post("/register/vendor",authController.registerVendor);
// router.post("/register/vendor", registerValidation, handleValidation, authController.registerVendor);


// Admin Registration
router.post("/register/admin", registerValidation, handleValidation, authController.registerAdmin);

// OTP Verification
router.post("/verify-otp", authController.verifyOTP);

// User Login
router.post("/login/user", loginValidation, handleValidation, authController.loginUser);

// Vendor Login
router.post("/login/vendor", loginValidation, handleValidation, authController.loginVendor);

// Admin Login
router.post("/login/admin", loginValidation, handleValidation, authController.loginAdmin);

export default router;
