import express from 'express';
import {
    registerUser,
    loginUser,
    verifyLoginOTP,
    logoutUser
} from '../controllers/authController.js';  // Import the functions
import {
    validateUserRegistration,
    validateUserLogin
} from '../utils/validation.js';

const router = express.Router();

router.post('/register', validateUserRegistration, registerUser);
router.post('/login', validateUserLogin, loginUser);
router.post('/verify-login-otp', verifyLoginOTP);
router.post('/logout', logoutUser);

export default router;
