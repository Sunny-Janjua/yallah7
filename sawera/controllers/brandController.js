import { Brand } from "../models/Brand.js";  // Ensure you import the Brand model

// Add a new brand
export const addBrand = async (req, res) => {
  try {
    const { name, logo, description } = req.body;

    const newBrand = new Brand({
      name,
      logo,
      description,
    });

    await newBrand.save();

    res.status(201).json({ success: true, message: "Brand added successfully", brand: newBrand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all brands
export const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();  // Retrieve all brands
    res.status(200).json({ success: true, brands });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a specific brand by ID
export const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;  // Get brand ID from request parameters
    const updates = req.body;  // Get updates from request body

    const brand = await Brand.findByIdAndUpdate(id, updates, { new: true });  // Update the brand

    if (!brand) {
      return res.status(404).json({ success: false, message: "Brand not found" });
    }

    res.status(200).json({ success: true, message: "Brand updated successfully", brand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a brand by ID
export const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;  // Get brand ID from request parameters

    const brand = await Brand.findByIdAndDelete(id);  // Delete the brand

    if (!brand) {
      return res.status(404).json({ success: false, message: "Brand not found" });
    }

    res.status(200).json({ success: true, message: "Brand deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
