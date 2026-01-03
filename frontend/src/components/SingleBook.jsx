import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error("Failed to fetch book", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading book...</p>;
  }

  if (!book) {
    return <p className="text-center mt-10">Book not found 😕</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 pt-[120px]">
      {/* Image */}
      <img
        src={book.img}
        alt={book.title}
        className="w-full h-[420px] object-contain rounded-lg"
      />

      {/* Info */}
      <div>
        <h1 className="text-4xl font-bold">{book.title}</h1>
        <p className="text-lg text-gray-500 mt-2">{book.author}</p>

        <p className="mt-6 text-gray-700 dark:text-gray-300">
          {book.description}
        </p>

        <p className="text-2xl font-semibold mt-6">₹{book.price}</p>

        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: book._id,
                title: book.title,
                price: book.price,
                img: book.img,
              })
            )
          }
          className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
