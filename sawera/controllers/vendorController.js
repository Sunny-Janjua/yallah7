import { Vendor } from "../models/Vendor.js";  // Ensure you import the Vendor model
import { Product } from "../models/Product.js"; // Ensure you import the Product model

// Get all vendors (Admin only)
export const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find(); // Retrieve all vendors
    res.status(200).json({ success: true, vendors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get vendor by ID (Admin only)
export const getVendorById = async (req, res) => {
  try {
    const { vendorId } = req.params; // Get vendor ID from request parameters
    const vendor = await Vendor.findById(vendorId); // Find vendor by ID

    if (!vendor) {
      return res.status(404).json({ success: false, message: "Vendor not found" });
    }

    res.status(200).json({ success: true, vendor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create vendor profile (Admin only)
export const createVendor = async (req, res) => {
  try {
    const { name, contactEmail, productsSupplied, companyInfo } = req.body;

    const newVendor = new Vendor({
      name,
      contactEmail,
      productsSupplied,
      companyInfo,
    });

    await newVendor.save(); // Save the new vendor to the database

    res.status(201).json({ success: true, message: "Vendor created successfully", vendor: newVendor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update vendor profile (Admin only)
export const updateVendor = async (req, res) => {
  try {
    const { vendorId } = req.params; // Get vendor ID from request parameters
    const updates = req.body; // Get updates from request body

    const vendor = await Vendor.findByIdAndUpdate(vendorId, updates, { new: true }); // Update the vendor

    if (!vendor) {
      return res.status(404).json({ success: false, message: "Vendor not found" });
    }

    res.status(200).json({ success: true, message: "Vendor updated successfully", vendor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete vendor profile (Admin only)
export const deleteVendor = async (req, res) => {
  try {
    const { vendorId } = req.params; // Get vendor ID from request parameters
    const vendor = await Vendor.findByIdAndDelete(vendorId); // Delete the vendor

    if (!vendor) {
      return res.status(404).json({ success: false, message: "Vendor not found" });
    }

    res.status(200).json({ success: true, message: "Vendor deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get products of a vendor
export const getVendorProducts = async (req, res) => {
  try {
    const { vendorId } = req.params; // Get vendor ID from request parameters
    const products = await Product.find({ vendor: vendorId }); // Find products associated with the vendor

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
