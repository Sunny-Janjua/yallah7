// server.js
import express from "express";
import dotenv from "dotenv";
import connectdb from "./conection/db.js";
import newRouter from "./routes/routes.js";

const app = express();
dotenv.config({
  path: "./.env",
});


app.set("view engine", "ejs");
app.set("views","views"); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(newRouter);

const portName = process.env.PORT_NAME || 8000;

(async () => {
  try {
    // Connect to the database
    await connectdb();

    // Start the Express server
    app.listen(portName, () => {
      console.log(`Express server is running on port ${portName}`);
    });
  } catch (error) {
    // Log the actual error message
    console.error("Error occurred while starting the server:", error);
  }
})();
