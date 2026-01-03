import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoutes from './routes/bookRoutes.js'
import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", bookRoutes);
app.get("/api/profile", protect, (req, res) => {
    res.json({ message: "Access granted", userId: req.user.id });
});
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () =>
            console.log("Server running on port 3000")
        );
    })
    .catch(err => console.log(err));
