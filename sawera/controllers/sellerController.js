import { Seller } from "../models/Seller.js";  // Ensure you import the Seller model
import { Product } from "../models/Product.js"; // Ensure you import the Product model

// Create seller profile
export const createSeller = async (req, res) => {
  try {
    const { name, contactEmail, productsSupplied, companyInfo } = req.body;

    const newSeller = new Seller({
      name,
      contactEmail,
      productsSupplied,
      companyInfo,
      userId: req.user.id,  // Assuming the seller's user ID is set from the authenticated user
    });

    await newSeller.save();

    res.status(201).json({ success: true, message: "Seller created successfully", seller: newSeller });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all sellers (Admin only)
export const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json({ success: true, sellers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get seller by ID (Admin only)
export const getSellerById = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const seller = await Seller.findById(sellerId);

    if (!seller) {
      return res.status(404).json({ success: false, message: "Seller not found" });
    }

    res.status(200).json({ success: true, seller });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update seller profile (Admin only)
export const updateSeller = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const updates = req.body;

    const seller = await Seller.findByIdAndUpdate(sellerId, updates, { new: true });

    if (!seller) {
      return res.status(404).json({ success: false, message: "Seller not found" });
    }

    res.status(200).json({ success: true, message: "Seller updated successfully", seller });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete seller profile (Admin only)
export const deleteSeller = async (req, res) => {
  try {
    const { sellerId } = req.params;

    const seller = await Seller.findByIdAndDelete(sellerId);

    if (!seller) {
      return res.status(404).json({ success: false, message: "Seller not found" });
    }

    res.status(200).json({ success: true, message: "Seller deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get products of a seller (Admin/Seller)
export const getSellerProducts = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const products = await Product.find({ seller: sellerId });

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
