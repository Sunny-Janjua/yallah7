// routes/routes.js
import User from "../models/model.js";
import express from "express";
import bcrypt from "bcryptjs";
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
import fs from 'fs'; // Import fs module

const newRouter = express.Router();

// Load environment variables
dotenv.config({
    path: "./.env"
});

// Configure Cloudinary
const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

if (!cloud_name || !api_key || !api_secret) {
    console.error("Cloudinary configuration is missing in .env");
    process.exit(1); // Exit if Cloudinary config is missing
}

cloudinary.config({ 
    cloud_name, 
    api_key, 
    api_secret
});

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {

        cb(null, `${file.originalname}`);
    }
});

const upload = multer({ storage: storage });
newRouter.get("/signup", (req, res) => {
    res.render("signup");
});

// GET /login
newRouter.get("/login", (req, res) => {
    res.render("login");
});

// GET /home
newRouter.get("/home", (req, res) => {
    res.render("home");
});

// POST /signup
newRouter.post("/signup", upload.single('img'), async (req, res) => { // Changed 'file' to 'img'
    try {
        const { username, email, password, ischeck } = req.body; // Destructure ischeck

        // Validate required fields
        if (!username || !email || !password || !ischeck) {
            console.log("Missing required fields");
            return res.status(400).send("Please fill in all required fields.");
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User already exists");
            return res.status(400).send("User with this email already exists.");
        }

        // Upload image to Cloudinary
        if (!req.file) {
            console.log("No file uploaded");
            return res.status(400).send("Please upload an image.");
        }

        const uploadResult = await cloudinary.uploader.upload(req.file.path)
            .catch((error) => {
                console.log("Cloudinary upload error:", error);
                return null; // Handle upload failure
            });

        if (!uploadResult) {
            return res.status(500).send("Failed to upload image.");
        }

        console.log("Cloudinary upload result:", uploadResult);

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt); // Removed 'await' since hashSync is synchronous

        // Create new user data
        const newUserData = new User({
            username,
            email,
            password: hashedPassword,
            img: uploadResult.secure_url,
            ischeck: ischeck === 'on' // Convert to Boolean
        });

        // Delete local file after upload
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error("Error deleting local file:", err);
            } else {
                console.log("Local file deleted:", req.file.path);
            }
        });

        // Save user to database
        await newUserData.save();
        res.redirect("/login");
    } catch (error) {
        console.log("Error in POST /signup:", error); // Fixed typo and logged error
        res.status(500).send("Internal Server Error.");
    }
});

// POST /login
newRouter.post("/login", async (req, res) => { // Declare as async
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            console.log("Missing email or password");
            return res.status(400).send("Please enter both email and password.");
        }

        // Find user by email
        const user = await User.findOne({ email }); // Removed 'new' keyword
        if (!user) {
            console.log("User does not exist");
            return res.status(400).send("Invalid email or password.");
        }

        // Compare passwords
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) {
            console.log("Password is not correct");
            return res.status(400).send("Invalid email or password.");
        }

        // Redirect to home
        res.redirect("/home");
    } catch (error) {
        console.log("Error in POST /login:", error); // Fixed typo and logged error
        res.status(500).send("Internal Server Error.");
    }
});

export default newRouter;
