import mongoose from "mongoose";

// Category reference schema for a hierarchical structure
const categoryReferenceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, trim: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // Reference to the parent category
    images: {
      type: String,
      trim: true,
      required: true,
    },
    // Optional: Add an array to hold references to child categories
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  },
  {
    timestamps: true,
  }
);

// Create the model
const CategoryReference = mongoose.model("CategoryReference", categoryReferenceSchema);
export default CategoryReference;
