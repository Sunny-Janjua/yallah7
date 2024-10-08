import express from "express";
import User from "../model/model.js";
import bcrypt from 'bcrypt';
const userRouter = express.Router();

userRouter.get("/signup", (req, res) => {
    res.render("signup");
});

// Login Route
userRouter.get("/login", (req, res) => {
    res.render("login");
});

// Home Route
userRouter.get("/home", (req, res) => {
    if (req.session.user) {
        res.render("home", { user: req.session.user });
    } else {
        res.redirect("/login");
    }
});

// Signup POST handler
userRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();
        res.redirect("/login");
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error during signup", error: error.message });
    }
});

// Login POST handler
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            console.log("User not found");
            return res.status(401).send("Invalid email or password");
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            console.log("Password does not match");
            return res.status(401).send("Invalid email or password");
        }
        res.redirect("/home");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal server error during login");
    }
});

export default userRouter;
