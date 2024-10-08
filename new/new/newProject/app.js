import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectdb from "./connection/connectdb.js";
import authRoutes from "./routers/authRoutes.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import roleMiddleware from "./middlewares/roleMiddleware.js";
import verifyToken from "./middlewares/verifyToken.js";
import errorHandler from "./middlewares/errorHandler.js";
import morgan from 'morgan';
import winston from 'winston';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import productRoutes from "./routers/productRoutes.js";
import sellerRoutes from "./routers/sellerRoutes.js";

dotenv.config({ 
  path: "./.env",
});

const app = express();
const portName = process.env.PORT_NAME || 8000;

// Setup Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// If we're not in production then log to the `console` with the format:
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

// Middleware to log requests using Winston
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Security Middleware
app.use(helmet());

// CORS Configuration
app.use(cors({
  origin: 'http://your-frontend-domain.com', // Update this to your frontend domain
  optionsSuccessStatus: 200,
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use(limiter);

// HTTP request logging using morgan
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Body Parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/seller", sellerRoutes);

// Protected Route Example
app.get(
  "/api/protected",
  verifyToken,
  authMiddleware,
  roleMiddleware("admin", "vendor", "user"),
  (req, res) => {
    res.send({
      message:
        "This is a protected route accessible by Admins, Vendors, and Users.",
    });
  }
);

// Error Handling Middleware (Should be after all other routes and middlewares)
app.use(errorHandler);

// Start Server
(async () => {
  try {
    await connectdb(); 
    app.listen(portName, () => {
      console.log(`Express server is running on port ${portName}`);
    });
  } catch (error) {
    console.error('Error Found on Express Server:', error);
    process.exit(1);
  }
})();
