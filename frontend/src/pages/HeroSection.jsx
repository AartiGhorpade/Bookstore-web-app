import heroImg from "../assets/images/hero-section.webp";
const HeroSection = () => {
  return (
    <div className="grid md:flex gap-10 justify-evenly items-center max-md:mt-[40px]">
      <div className="md:w-[60%]">
        <h1 className="lg:text-[60px] md:text-[45px] text-[40px] font-bold">
          Discover Your Next{" "}
          <p className="dark-purple-text dark:purpleText">Great Read</p>
        </h1>
        <p className="md:text-[22px] text-[16px] mt-4 lg:w-[90%]">
          Dive into a world of stories and knowledge. Explore our curated
          collection of books, find your favorite authors, and bring home the
          joy of reading —{" "}
          <span className="dark-purple-text dark:purpleText">
            anytime, anywhere.
          </span>
        </p>
      </div>
      <div className="md:w-[40%] md:mt-[40px] mt-4">
        <img
          src={heroImg}
          alt="Book hero"
          className="md:w-[400px] md:h-[400px] w-[350px] h-[320px] object-cover md:object-[20%_25%] object-[20%_22%] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
