// validators/authValidator.js
import { body } from 'express-validator';

export const registerValidation = [
  body('username').notEmpty().withMessage('Username is required'),
  body('companyName').optional().notEmpty().withMessage('Company name cannot be empty'),
  body('contactPerson').optional().notEmpty().withMessage('Contact person cannot be empty'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

export const loginValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];
