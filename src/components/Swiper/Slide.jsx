import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";


export const Slider = ({ slides }) => {
  return (
    <Swiper

      spaceBetween={50}
      slidesPerView={3}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
