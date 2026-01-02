import heartImg from "../assets/images/heart.webp";

const FavBookSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 max-md:gap-y-6 pt-[40px]">
      <div>
        <img
          src={heartImg}
          alt="Book heart"
          className="md:w-[520px] md:h-[500px] w-[350px] h-[320px] object-cover md:object-[0%_80%] object-[20%_22%] rounded-3xl"
        />
      </div>
      <div>
        <h2 className="lg:text-[60px] md:text-[45px] text-[40px] font-bold">
          Find your{" "}
          <span className="dark-purple-text dark:purpleText">favorite</span>{" "}
          book here
        </h2>
        <p className="md:text-[22px] text-[16px] mt-4">
          Every book has a story, and every reader has a journey. Start yours
          with a collection crafted to inspire, educate, and entertain.
        </p>
        <div className="mt-10">
          <div className="flex">
            {/* Input */}
            <input
              type="text"
              placeholder="Search books, authors..."
              //   value={value}
              //   onChange={onChange}
              className="
            flex-1 px-4 py-3
            rounded-l-lg
            border border-r-0 border-gray-300
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            bg-white text-gray-900
            dark:bg-gray-800 dark:text-white dark:border-gray-600
            w-[90%] md:w-[80%] "/>

            {/* Button */}
            <button
              //   onClick={onSearch}
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
    </div>
  );
};

export default FavBookSection;
