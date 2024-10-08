// utils/uploadOnCloudinary.js
import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import fs from "fs";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_NAME,
  api_key: process.env.CLOUDNARY_FETCH_KEY,
  api_secret: process.env.CLOUDNARY_API_SCERET_KEY,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (localFilePath) {
      const response = await cloudinary.uploader.upload(localFilePath, {
        folder: "products",
        resource_type: "auto",
      });
      fs.unlinkSync(localFilePath); // Remove the file from local storage after upload

      return response;
    }
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Remove the file if upload fails
    }
    return null;
  }
};

export { uploadOnCloudinary };
