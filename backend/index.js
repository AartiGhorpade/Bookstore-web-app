import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { getBestSellers } from "./controllers/bookController.js";

dotenv.config();

const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());

router.get("/best-sellers", getBestSellers);
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () =>
            console.log("Server running on port 5000")
        );
    })
    .catch(err => console.log(err));
