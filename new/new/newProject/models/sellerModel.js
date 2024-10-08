// models/sellerModel.js
import mongoose from "mongoose";
import User from "./userModel.js";
import Wallet from "./walletModel.js";

const sellerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  storeName: {
    type: String,
    required: [true, "Store name is required"],
    trim: true,
    unique: true,
  },
  storeDescription: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot be more than 5"],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
  },
});

const Seller = User.discriminator("Seller", sellerSchema);

export default Seller;
