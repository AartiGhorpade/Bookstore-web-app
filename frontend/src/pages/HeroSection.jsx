import heroImg from "../assets/images/hero-section.webp";
const HeroSection = () => {
  return (
    <div className="grid lg:flex gap-10 justify-evenly items-center">
      <div className="lg:w-[50%]">
        <h1 className="lg:text-[60px] text-[40px] font-bold">
          Discover Your Next{" "}
          <span className="purpleColor">Great Read</span>
        </h1>
        <p className="lg:text-[22px] text-[16px] mt-4">
          Dive into a world of stories and knowledge. Explore our curated
          collection of books, find your favorite authors, and bring home the
          joy of reading — <span className="purpleColor">anytime, anywhere.</span>
        </p>
      </div>
      <div className="lg:w-[50%] flex justify-center pt-[40px]">
        <img
          src={heroImg}
          alt="Book hero"
          className="lg:w-[400px] lg:h-[400px] w-[150px] h-[150px] object-cover object-[20%_25%] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
