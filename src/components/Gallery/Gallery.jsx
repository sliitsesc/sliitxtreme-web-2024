import { landingPageData } from "../../lib/data/landingPageData";
import { Link } from "react-router-dom"; 

export default function Gallery() {
  return (
      <section className="py-12">
        <div className="container mx-auto p-4 bg-black  px-8 py-10 text-center rounded-md dm-sans-400">

          <div className="text-center mb-8">
            <h1 className="text-[48px] dm-sans-600 font-bold text-white mb-5 drop-shadow-white-glow">
              {landingPageData.gelleryItem.title}
            </h1>
            <p className="text-[20px] text-white">
              {landingPageData.gelleryItem.content}
            </p>
          </div>


            <div className="flex flex-col sm:flex-row gap-y-6 md:gap-y-14 gap-4 p-6 flex-wrap justify-center">
                {landingPageData.gelleryItem.images.map((image, index) => (
                        <Link key={index} to="#" className="relative w-full max-w-[320px]">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-[420px] object-cover rounded-lg border-gray-300 grayscale"
                            />

                            <div
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-orange-600 px-6 py-2 rounded-lg w-[80%] text-left pl-2 font-bold shadow-white-glow">
                                <p>{image.content}</p>
                            </div>

                        </Link>
                ))}
            </div>
        </div>
      </section>
  );
}
