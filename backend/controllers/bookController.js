import Book from "../models/Book.js";

export const getBestSellers = async (req, res) => {
    try {
        const books = await Book.find({ isBestSeller: true });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
