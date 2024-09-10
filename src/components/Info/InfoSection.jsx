import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function InfoSection() {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-y-10 md:gap-x-10 py-16 px-8">
        {/* Image Slider */}
        <div className="w-full bg-slate-200 overflow-hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="relative w-full h-[400px] overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/91/92/c9/9192c99c14e8f9d303a5ecfefd96ecc9.jpg"
                  className="w-full h-full object-cover grayscale"
                  alt="Demo Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[400px] overflow-hidden">
                <img
                  src="https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg"
                  className="w-full h-full object-cover grayscale"
                  alt="Image 2"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[400px] overflow-hidden">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*E-MJcNbKGHdrcCKUU6r9xg.jpeg"
                  className="w-full h-full object-cover grayscale"
                  alt="Image 3"
                />
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlide components as needed */}
          </Swiper>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold">What is SLIITXtreme?</h1>
          <p className="py-6 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
          <button className="btn btn-primary w-fit">Get Started</button>
        </div>
      </div>
    </section>
  );
}
