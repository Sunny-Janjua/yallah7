import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: false,  // Not required, so no validation message
    },
    img: {
        type: String,
        required: [true, "Image URL is required"]  // Corrected typo and added a meaningful message
    },
    ischeck: {
        type: Boolean,  // Use Boolean instead of boolean
        required: true
    }
}, 
{
    timestamps: true
});

const User = mongoose.model("imgvideo", userSchema);

export default User;
