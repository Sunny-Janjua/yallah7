import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDatabase from './config/db.js';  // Add .js extension
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { subdomainMiddleware } from "./middlewares/subdomainMiddleware.js";  // Add the subdomain middleware
import bodyparser from 'body-parser';

dotenv.config({ path: './.env' });

const app = express();  // Removed incorrect options

const PORT = process.env.PORT_NAME || 8000;

// Middleware
app.use(errorMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON requests
app.use(cookieParser());

// Sample Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes
import authRoutes from "./routes/authRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";

// Apply routes
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sellers", sellerRoutes);
app.use("/api/user", userRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/brands", brandRoutes);

// Server Listening
(async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server connected on port ${PORT}`);
    });
  } catch (err) {
    console.log('Error:', err);
    process.exit(1);  // Exit process on connection failure
  }
})();
