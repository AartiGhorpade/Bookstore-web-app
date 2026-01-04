import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 🔍 Filter logic
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-[70px] pb-10">
      <div className="md:flex justify-between">
        <h2 className="lg:text-[40px] md:text-[35px] text-[30px] font-bold my-10">
          All Books
        </h2>

        {/* Search */}
        <div>
          <div className="flex my-10">
            <input
              type="text"
              placeholder="Search books, authors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              flex-1 px-4 py-2
              rounded-l-lg
              border border-r-0 border-gray-300
              focus:outline-none focus:ring-1 focus:ring-indigo-500
              bg-white text-gray-900
              dark:bg-gray-800 dark:text-white dark:border-gray-600
              w-[90%] md:w-[90%]
            "
            />

            <button
              className="
              px-6 py-2
              rounded-r-lg
              bg-indigo-600 text-white
              hover:bg-indigo-700
              transition
              dark:bg-indigo-500 dark:hover:bg-indigo-600
            "
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Books */}
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-2xl">
          No books found 📚
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 md:gap-x-8 md:gap-y-10 xl:gap-x-10 xl:gap-y-8">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
