import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const NewArrivals = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/new-arrivals`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pb-10">
      <h2 className="lg:text-[40px] md:text-[35px] text-[30px] font-bold my-10">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-8 md:gap-y-10 xl:gap-x-10 xl:gap-y-8">
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
