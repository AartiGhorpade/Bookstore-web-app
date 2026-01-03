import express from "express";
import { getAllBooks, createBook, getBestSellers, getNewArrivals, singleBook } from "../controllers/bookController.js";
const router = express.Router();

router.get("/books", getAllBooks);
router.post("/add-book", createBook);
router.get("/best-sellers", getBestSellers);
router.get("/new-arrivals", getNewArrivals);
router.get("/books/:id", singleBook);

export default router;
