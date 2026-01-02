import express from "express";
import { getAllBooks, createBook,getBestSellers,getNewArrivals } from "../controllers/bookController.js";
const router = express.Router();

router.get("/books", getAllBooks);
router.post("/add-book", createBook);
router.get("/best-sellers", getBestSellers);
router.get("/new-arrivals", getNewArrivals);

export default router;
