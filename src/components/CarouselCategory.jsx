import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function CarouselCategory() {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={"../src/assets/category_0.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../src/assets/category_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../src/assets/category_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../src/assets/category_3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../src/assets/category_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../src/assets/category_5.jpg"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
