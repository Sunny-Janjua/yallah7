import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";

// Register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body; // Accept role during registration

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      role, // Store the user's role (admin, seller, customer, etc.)
    });

    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Generate JWT token with the user's role
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ success: true, token, role: user.role }); // Send role in the response
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Logout user
export const logoutUser = (req, res) => {
  // Clear the cookie
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

// Verify Login OTP
export const verifyLoginOTP = (req, res) => {
  const { otp } = req.body;

  // Implement your actual OTP verification logic here
  // This is just a mock example
  if (otp === "123456") {  // Assume 123456 is the correct OTP
    res.status(200).json({ success: true, message: "OTP verified successfully" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};
