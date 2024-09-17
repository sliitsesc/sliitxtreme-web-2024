import parse from "html-react-parser";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { landingPageData } from "../../lib/data/landingPageData";

export default function InfoSection() {
  return (
    <section>
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-10 md:gap-x-10 pt-10 pb-20 px-8">
        {/* Image Slider */}
        <div className="w-full bg-slate-200 overflow-hidden rounded-3xl">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {landingPageData?.aboutSection?.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full max-h-[450px] overflow-hidden ">
                  <img
                    src={image.src}
                    className="w-full h-full object-cover grayscale"
                    alt={image.alt}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col justify-center text-white dm-sans-400">
          <h1 className="text-[48px] font-bold drop-shadow-white-glow">
            {landingPageData?.aboutSection?.title}
          </h1>
          <p className="py-6 text-xl">
            {parse(landingPageData?.aboutSection?.content)}
          </p>
        </div>
      </div>
    </section>
  );
}
