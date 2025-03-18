import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user";
import categoryRoutes from "@routes/category";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// All App Routes
const BaseURL = "/api/v1";
app.get("/", (req, res) => {
  res.send("Hello from server!");
});

//routes
app.use(`${BaseURL}/auth`, userRoutes);
app.use(`${BaseURL}/category`, categoryRoutes);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  app.listen(port, () => console.log(`server listening on ${port}`));
});
