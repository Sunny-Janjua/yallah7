import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import Seller from "../models/sellerModel.js";
import { uploadOnCloudinary } from "../nodemailer/cloudinary.js";

// Create a new product
const createProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    stock,
    category,
    variations,
    vendor,
  } = req.body;

  try {
    // Validate required fields
    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    // Check if category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({ message: "Category not found." });
    }

    // Handle image uploads
    let imageUrls = [];
    if (req.files) {
      const uploadPromises = req.files.map(file => uploadOnCloudinary(file.path));
      const uploadResponses = await Promise.all(uploadPromises);
      imageUrls = uploadResponses.filter(response => response).map(response => response.secure_url);
    }

    // Create new product
    const product = new Product({
      name,
      description,
      price,
      stock,
      category,
      images: imageUrls,
      seller: req.user._id, // Assuming the authenticated user is the seller
      vendor: vendor || null,
      variations: variations ? JSON.parse(variations) : [],
    });

    await product.save();

    // Add product to seller's list
    await Seller.findByIdAndUpdate(req.user.sellerId, { $push: { products: product._id } });

    res.status(201).json({ message: "Product created successfully.", product });
  } catch (error) {
    console.error("Error in createProduct:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category").populate("seller");
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get single product by ID
const getProductById = async (req, res) => {
  const { productId } = req.params;
  
  try {
    const product = await Product.findById(productId).populate("category").populate("seller");
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({ product });
  } catch (error) {
    console.error("Error in getProductById:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update product
const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const updates = req.body;

  try {
    // If updating images
    if (req.files) {
      const uploadPromises = req.files.map(file => uploadOnCloudinary(file.path));
      const uploadResponses = await Promise.all(uploadPromises);
      const imageUrls = uploadResponses.filter(response => response).map(response => response.secure_url);
      updates.images = imageUrls;
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true }).populate("category").populate("seller");

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product updated successfully.", product: updatedProduct });
  } catch (error) {
    console.error("Error in updateProduct:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    // Remove product from seller's list
    await Seller.findByIdAndUpdate(deletedProduct.seller, { $pull: { products: deletedProduct._id } });

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error in deleteProduct:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
