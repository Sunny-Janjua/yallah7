import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import adminRouter from "./routes/adminRoute.js";
import sellerRouter from "./routes/sellerRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoute.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";


dotenv.config({
  path: "./.env",
});

const app = express();
const portName = process.env.PORT_NAME || 5000;

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Setup
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/sellers", sellerRouter); 
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

// Example Public Route
app.get("/", (req, res) => {
  res.send(`Our Express Server is running on port ${portName}`);
});

// Error Handling Middleware (should be after all other routes and middleware)
app.use(errorHandler);

// Connect to Database and Start Server
(async () => {
  try {
    await connectdb();
    console.log(`Mongoose Server Connected on ${process.env.MONGOOSE_URI || "mongodb://localhost:27017"}`);

    app.listen(portName, () => {
      console.log(`Our Express Server Started on port ${portName}`);
    });
  } catch (error) {
    console.error(`Server Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
})();

export default app;
