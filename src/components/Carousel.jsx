import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src="../src/assets/carousel_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/carousel_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/carousel_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/carousel_4.jpg" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="../src/assets/carousel_5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/assets/carousel_6.jpg" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
}
