import Book from "../models/Book.js";

// best sellers
export const getBestSellers = async (req, res) => {
    try {
        const books = await Book.find({ isBestSeller: true });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// get books
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// create books
export const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//  new arrivals
export const getNewArrivals = async (req, res) => {
    try {
        const books = await Book.find()
            .sort({ _id: -1 })
            .limit(4);

        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const singleBook = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found",
            });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};