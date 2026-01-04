import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BookCard from "./BookCard";

const BookSwiper = ({ books, onAddToCart }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        600: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
      }}
      className="book-slider"
    >
      {books.map((book) => (
        <SwiperSlide key={book._id}>
          <BookCard book={book} onAddToCart={onAddToCart} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookSwiper;
