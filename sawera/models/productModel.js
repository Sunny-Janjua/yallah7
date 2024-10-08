import mongoose from "mongoose";

const variationSchema = new mongoose.Schema(
  {
    key: { type: String, required: true },
    value: { type: [String], required: true },
  }, {_id: null}
);

const ratingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
  }
);

// Product Schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"],
    },
    stock: {
      type: Number,
      required: true,
      min: [0, "Stock cannot be negative"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    images: [
      {
        type: String,
        trim: true,
        required:true
      },
    ],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" }, // Optional
    variations: { type: [variationSchema], default: [] },
    ratings: { type: [ratingSchema], default: [] },
    averageRating: { type: Number, min: 1, max: 5, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

productSchema.methods.calculateAverageRating = function () {
  if (this.ratings.length === 0) {
    this.averageRating = 0;
  } else {
    const sum = this.ratings.reduce((acc, curr) => acc + curr.rating, 0);
    this.averageRating = sum / this.ratings.length;
  }
  return this.save();
};

productSchema.post("save", function (doc, next) {
  if (doc.isModified("ratings")) {
    doc.calculateAverageRating()
      .then(() => next())
      .catch((err) => next(err));
  } else {
    next();
  }
});

const Product = mongoose.model("Product", productSchema);
export default Product;
