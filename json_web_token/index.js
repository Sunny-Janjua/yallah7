import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import session from "express-session";
import dotenv from "dotenv";
import userRouter from "./routes/route.js";

const app = express();

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Retrieve port and DB connection string from environment variables
const port = process.env.PORT_NAME || 5000;
const dbUrl = process.env.CONNECTION_STRING;

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", "views"); // Corrected the typo

// Middlewares to handle URL encoded data and JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouter);

// Async function to handle Mongoose connection and server start
(async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(dbUrl);
    console.log("Mongoose Connected");

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    // Handle connection errors
    console.error("Mongoose Connection Error", error);
  }
})();
