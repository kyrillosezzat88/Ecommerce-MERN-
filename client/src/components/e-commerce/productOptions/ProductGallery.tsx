import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { HeartIcon, HeartSolidIcon } from "@assets/icons";

type TProductGallery = {
  gallery: string[] | undefined;
  isLiked?: boolean;
};

const ProductGallery = ({ gallery, isLiked }: TProductGallery) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="sticky top-0">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="mb-3 rounded-lg relative"
        autoplay
      >
        {gallery?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        <span className="absolute right-4 top-4 z-10 bg-white p-2 rounded-full shadow cursor-pointer">
          {isLiked ? <HeartSolidIcon /> : <HeartIcon />}
        </span>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}
      >
        {gallery?.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="rounded-lg cursor-pointer"
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
        {isLiked}
      </Swiper>
    </div>
  );
};

export default ProductGallery;
