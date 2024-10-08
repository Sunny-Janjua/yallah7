import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to the Product model
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"], // Minimum quantity is 1
        },
        price: {
          type: Number,
          required: true,
          min: [0, "Price cannot be negative"], // Price cannot be negative
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      min: [0, "Total amount cannot be negative"], // Total amount cannot be negative
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "bank_transfer"], // Allowed payment methods
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "processing", "completed", "cancelled"], // Possible order statuses
      default: "pending",
    },
    shippingAddress: {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Create the Order model
const Order = mongoose.model("Order", orderSchema);
export default Order
