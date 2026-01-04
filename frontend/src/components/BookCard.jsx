import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Alert from "./Alert";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleAddToCart = () => {
    dispatch(addToCart(book));
    setAlert({
      type: "success",
      message: "Added to cart 🎉",
    });
  };

  return (
    <>
      <div className="fixed top-5 right-5 z-[50] w-80 pointer-events-none">
        {alert && (
          <div className="pointer-events-auto">
            <Alert
              type={alert.type}
              message={alert.message}
              onClose={() => setAlert(null)}
            />
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-black rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer md:w-fit">
        {/* Book Image */}
        <div
          className="lg:w-[280px] lg:h-[300px] dark:bg-black flex items-center justify-center rounded-lg"
          onClick={() => navigate(`/book/${book._id}`)}
        >
          <img
            src={book.img}
            alt={book.title}
            className="lg:h-full lg:w-full md:h-[250px] md:w-[280px] h-[380px] w-[250px] max-md:py-8 p-4"
          />
        </div>

        {/* Card Content */}
        <div className={`px-4 pb-6 bg-gray-200 dark:bg-black py-2 dark:pb-6`}>
          <h3
            className="font-bold text-black dark:text-white md:text-[18px] text-[16px] line-clamp-1"
            onClick={() => navigate(`/book/${book._id}`)}
          >
            {book.title}
          </h3>

          <p className="md:text-[18px] text-[14px] text-gray-500 dark:text-gray-400 font-semibold mb-2">
            {book.author}
          </p>

          <div className="flex md:items-center justify-between md:mt-6">
            <span className="font-bold dark-purple-text dark:purpleText">
              ₹ {book.price}
            </span>

            <button
              className="bg-purple-500 font-semibold text-white text-sm px-3 py-1 rounded hover:bg-purple-700"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
