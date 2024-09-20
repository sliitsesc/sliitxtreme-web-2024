import { Link } from "react-router-dom";

import { landingPageData } from "../../lib/data/landingPageData";
import Header from "../common/Typography/Header";

export default function Gallery() {
  return (
    <section className="py-12">
      <div className="container mx-auto p-4 bg-black px-8 py-10 text-center rounded-3xl dm-sans-400">
        <Header
          title={landingPageData?.gallerySection?.title}
          subtitle={landingPageData?.gallerySection?.subtitle}
          className={"mb-10"}
        />
        {/* <div className="text-center mb-8">
          <h1 className="text-[48px] dm-sans-600 font-bold text-white mb-5 drop-shadow-white-glow">
            {landingPageData.gelleryItem.title}
          </h1>
          <p className="text-[20px] text-white">
            {landingPageData.gelleryItem.content}
          </p>
        </div> */}

        <div className="flex flex-col md:flex-row gap-x-10 gap-y-6 md:gap-y-14 gap-4 p-6 justify-center">
          {landingPageData?.gallerySection?.images?.map((image, index) => (
            <Link key={index} to={image?.link} className="relative w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[420px] object-cover rounded-3xl border-gray-300 grayscale hover:grayscale-0 transition-all duration-500"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-orange-600 px-6 py-4 rounded-[15px] w-[95%] text-left text-[20px] font-bold drop-shadow-white-glow">
                <p>{image.content}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
