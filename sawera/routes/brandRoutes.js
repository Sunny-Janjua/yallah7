import express from 'express';
import { addBrand, getBrands, updateBrand, deleteBrand } from '../controllers/brandController.js';

const router = express.Router();

router.post('/add', addBrand);  // Add a new brand
router.get('/', getBrands);  // Get all brands (for filtering or displaying in a dropdown)
router.put('/update/:id', updateBrand);  // Update a specific brand by ID
router.delete('/delete/:id', deleteBrand);  // Delete a brand by ID

export default router;
