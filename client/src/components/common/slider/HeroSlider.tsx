import { Swiper, SwiperSlide } from "swiper/react";
import HeroImage from "@images/hero-1.png";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { Button } from "@components/form";

const sliderData = [
  {
    title: "Stylish Looks for Any Season",
    subtitle: "Sale! Up To 50% Off!",
    url: "/",
    image: HeroImage,
  },
  {
    title: "Stylish Looks for Any Season",
    subtitle: "Sale! Up To 50% Off!",
    url: "/",
    image: HeroImage,
  },
];

const HeroSlider = () => {
  return (
    <div className="xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full pt-20">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="relative h-full"
      >
        {sliderData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center h-full container">
              <img
                src={slide.image}
                alt="hero"
                className="absolute top-0 right-0 max-w-[50%]"
              />
              <div className=" max-w-44 sm:max-w-xl z-10">
                <p className=" mb-2 md:mb-6">{slide.subtitle}</p>
                <h1 className="text-2xl md:text-7xl font-bold">
                  {slide.title}
                </h1>
                <NavLink to={slide.url}>
                  <Button text="Shop Now" className="btn-primary" />
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
