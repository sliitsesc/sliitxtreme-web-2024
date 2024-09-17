import parse from "html-react-parser";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet-async";

import { landingPageData } from "../../lib/data/landingPageData";

export default function InfoSection() {
  return (
    <section className="bg-transparent"> {/* Ensure section background remains transparent */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-10 md:gap-x-10 pt md:pt-10 pb-20 px-8">
        {/* Image Slider */}
        <div className="w-full lg:w-1/2 bg-slate-200 overflow-hidden rounded-3xl">
          <Swiper
            className="flex h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-h-[450px]"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {landingPageData?.aboutSection?.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    className="w-full h-full object-cover grayscale" // Grayscale effect added here
                    alt={image.alt}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-white dm-sans-400"> 
          <h1 className="text-[40px] lg:text-[48px] font-bold drop-shadow-white-glow">
            {landingPageData?.aboutSection?.title}
          </h1>
          <p className="py-6 text-lg lg:text-xl">
            {parse(landingPageData?.aboutSection?.content)}
          </p>
        </div>
      </section>

  );
}
