// models/userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "seller", "vendor", "admin"],
      default: "user",
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller", // Linking seller with user
    },
    walletId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet", // Linking wallet with user
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
    },
    otpExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
