import Carousel from "components/Carousel";
import CarouselProduct from "components/CarouselProduct";
import { config } from "react-spring";
import { Swiper, SwiperSlide } from 'swiper/react';



let slides = [
  {
    key: 1,
    content: <CarouselProduct />
  },
  {
    key: 2,
    content: <CarouselProduct />
  },
  {
    key: 3,
    content:<CarouselProduct />
  },
];


export default function Home() {
  return (
    <div   >
      <div
        className="flex justify-center items-center w-screen h-screen bg-[#7FfFbF] overflow-hidden lg:hidden"
      >
        <Carousel
          slides={slides}
          animationConfig={config.gentle}
        />
      </div>

      <div className="w-screen h-screen hidden lg:block">
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      
      className="w-full max-h-[100vh] h-[500px]"
      onSlideChange={(e) => console.log('slide change', e)}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide>
        <CarouselProduct />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselProduct />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselProduct />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselProduct />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselProduct />
      </SwiperSlide>
    </Swiper>
      </div>

    </div>
  )
}


