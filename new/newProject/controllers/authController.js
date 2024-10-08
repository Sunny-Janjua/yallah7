// controllers/authController.js
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import Vendor from "../models/venderModel.js";
import Admin from "../models/adminModel.js";
import sendEmail from "../nodemailer/nodeMailer.js"
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// Generate JWT token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Generate OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString(); // 6-digit OTP
};

// Send OTP via Email
const sendOTPEmail = async (email, otp) => {
  const subject = "Your OTP Code";
  const text = `Your OTP code is ${otp}`;
  const html = `<p>Your OTP code is <b>${otp}</b></p>`;

  await sendEmail({ to: email, subject, text, html });
};

// Registration for Users
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Register User: User already exists with email:', email);
      return res.status(400).json({ message: "User already exists with this email." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const otp = generateOTP();
    const otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: "user",
      otp,
      otpExpires,
    });
    await user.save();
    console.log('Register User: User saved successfully:', user);

    await sendOTPEmail(email, otp);
    console.log('Register User: OTP sent to email');

    res.status(201).json({ message: "Registration successful. Please verify your email with the OTP sent." });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Registration for Vendors
const registerVendor = async (req, res) => {
  const {companyName, contactPerson, email, password } = req.body;
  console.log('Register Vendor: Received request with data:', req.body);

  try {
    const existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      console.log('Register Vendor: Vendor already exists with email:', email);
      return res.status(400).json({ message: "Vendor already exists with this email." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const otp = generateOTP();
    const otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

    const vendor = new Vendor({
      companyName,
      contactPerson,
      email,
      password: hashedPassword,
      role: "vendor",
      otp,
      otpExpires,
    });
    await vendor.save();
    console.log('Register Vendor: Vendor saved successfully:', vendor);

    await sendOTPEmail(email, otp);
    console.log('Register Vendor: OTP sent to email');

    res.status(201).json({ message: "Registration successful. Please verify your email with the OTP sent." });
  } catch (error) {
    console.error("Error in registerVendor:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Registration for Admins
const registerAdmin = async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Register Admin: Received request with data:', req.body);

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log('Register Admin: Admin already exists with email:', email);
      return res.status(400).json({ message: "Admin already exists with this email." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const otp = generateOTP();
    const otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

    const admin = new Admin({
      username,
      email,
      password: hashedPassword,
      role: "admin",
      otp,
      otpExpires,
    });
    await admin.save();
    console.log('Register Admin: Admin saved successfully:', admin);

    await sendOTPEmail(email, otp);
    console.log('Register Admin: OTP sent to email');

    res.status(201).json({ message: "Registration successful. Please verify your email with the OTP sent." });
  } catch (error) {
    console.error("Error in registerAdmin:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Verify OTP after Registration
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    let user = await User.findOne({ email });
    let role = 'user';
    if (!user) {
      user = await Vendor.findOne({ email });
      role = 'vendor';
    }
    if (!user) {
      user = await Admin.findOne({ email });
      role = 'admin';
    }

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User already verified." });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "OTP has expired." });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    const token = generateToken(user._id, user.role);
    res.status(200).json({ message: "Verification successful.", token });
    console.log(`Verify OTP: User ${email} verified successfully.`);
  } catch (error) {
    console.error("Error in verifyOTP:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login for Users
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login User: Received request with data:', req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Login User: Invalid credentials for email:', email);
      return res.status(400).json({ message: "Invalid credentials." });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: "Please verify your email before logging in." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Login User: Invalid password for email:', email);
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = generateToken(user._id, user.role);
    res.status(200).json({ token });
    console.log('Login User: Token generated and sent');
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login for Vendors
const loginVendor = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login Vendor: Received request with data:', req.body);

  try {
    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      console.log('Login Vendor: Invalid credentials for email:', email);
      return res.status(400).json({ message: "Invalid credentials." });
    }

    if (!vendor.isVerified) {
      return res.status(400).json({ message: "Please verify your email before logging in." });
    }

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) {
      console.log('Login Vendor: Invalid password for email:', email);
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = generateToken(vendor._id, vendor.role);
    res.status(200).json({ token });
    console.log('Login Vendor: Token generated and sent');
  } catch (error) {
    console.error("Error in loginVendor:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login for Admins
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login Admin: Received request with data:', req.body);

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      console.log('Login Admin: Invalid credentials for email:', email);
      return res.status(400).json({ message: "Invalid credentials." });
    }

    if (!admin.isVerified) {
      return res.status(400).json({ message: "Please verify your email before logging in." });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      console.log('Login Admin: Invalid password for email:', email);
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = generateToken(admin._id, admin.role);
    res.status(200).json({ token });
    console.log('Login Admin: Token generated and sent');
  } catch (error) {
    console.error("Error in loginAdmin:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  registerUser,
  registerVendor,
  registerAdmin,
  verifyOTP,
  loginUser,
  loginVendor,
  loginAdmin
};
