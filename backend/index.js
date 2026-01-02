import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoutes from './routes/bookRoutes.js'

dotenv.config();

const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bookRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () =>
            console.log("Server running on port 3000")
        );
    })
    .catch(err => console.log(err));
