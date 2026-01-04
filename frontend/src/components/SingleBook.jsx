import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import Alert from "./Alert";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);
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
    <div className="pt-8 pb-10">
      {alert && (
        <div className="fixed top-5 right-5 z-[50] w-80 pointer-events-none">
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-10 pt-[120px]">
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

          <p className="mt-6 text-gray-700 dark:text-gray-300 lg:w-[80%]">
            {book.description}
          </p>

          <p className="text-2xl font-semibold mt-6">₹{book.price}</p>

          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id: book._id,
                  title: book.title,
                  author: book.author,
                  price: book.price,
                  img: book.img,
                })
              );

              setAlert({
                type: "success",
                message: "Added to cart 🎉",
              });
            }}
            className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
