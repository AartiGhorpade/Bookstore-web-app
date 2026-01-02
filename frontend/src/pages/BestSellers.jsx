import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import BookSwiper from "../components/BookSwiper";
import { addToCart } from "../store/cartSlice";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const BestSellers = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/best-sellers`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-10">
      <h2 className="lg:text-[40px] md:text-[35px] text-[30px] font-bold my-10">
        Our Best Sellers
      </h2>

      <BookSwiper
        books={books}
        onAddToCart={(book) => dispatch(addToCart(book))}
      />
    </div>
  );
};

export default BestSellers;
