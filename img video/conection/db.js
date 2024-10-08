import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

const mongo_url = process.env.MONGOOSE_URI;

const connectdb = async () => {
    if (!mongo_url) {
        console.error("MongoDB URI is missing in environment variables");
        return;
    }

    try {
        const connection = await mongoose.connect(mongo_url);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);  // Exit process with failure
    }
};

export default connectdb;
