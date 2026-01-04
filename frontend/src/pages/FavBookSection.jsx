import heartImg from "../assets/images/heart.webp";

const FavBookSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 max-md:gap-y-6 md:gap-x-10 xl:gap-x-0 pt-[40px]">
      <div>
        <img
          src={heartImg}
          alt="Book heart"
          className="md:w-[520px] md:h-[500px] w-[350px] h-[420px] object-cover md:object-[0%_80%] object-[20%_22%] rounded-3xl"
        />
      </div>
      <div className="md:flex flex-col justify-center items-center mt-6">
        <h2 className="lg:text-[60px] md:text-[45px] text-[40px] font-bold">
          Find your{" "}
          <span className="dark-purple-text dark:purpleText">favorite</span>{" "}
          book here
        </h2>
        <p className="md:text-[22px] text-[16px] mt-4">
          Every book has a story, and every reader has a journey. Start yours
          with a collection crafted to inspire, educate, and entertain.
        </p>
      
      </div>
    </div>
  );
};

export default FavBookSection;
