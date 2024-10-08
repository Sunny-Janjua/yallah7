import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const mongo_uri = process.env.MONGODB_URI;

export const connectDatabase = async () => {
  await mongoose
    .connect(mongo_uri)
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("Error while connecting with database: ", err);
      process.exit(1);
    });
};

// Correcting the typo in the default export
export default connectDatabase;
// 