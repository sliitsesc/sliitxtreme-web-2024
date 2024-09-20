import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { landingPageData } from "../../lib/data/landingPageData";
import Header from "../common/Typography/Header";

export default function Testimonials() {
  const testimonials = landingPageData?.testimonialSection;
  return (
    <section>
      <div className="container mx-auto mb-20">
        <Header title={testimonials?.title} className={"mb-10"} />
        <div className="flex flex-col justify-center lg:flex-row lg:gap-x-[42px] gap-x-[42px] gap-y-8 text-white px-10 md:px-8">
          {testimonials?.testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="p-[3px] lg:max-w-[45%] bg-gradient-to-br from-orange-500 to-orange-950 rounded-3xl transition-transform transform flex justify-center items-center order-2 sm:order-none relative"
            >
              <div className="w-full h-full text-center bg-black rounded-3xl flex flex-col justify-center items-center py-[24px] md:py-[42px] px-[20px] lg:px-[42px]">
                <h2 className="dm-sans-600 text-[24px] mb-1">
                  {testimonial?.name}
                </h2>
                <h3 className="dm-sans-italic text-gray-400 text-[16px] px-4 md:px-10">
                  {testimonial?.team}
                </h3>
                <FaQuoteLeft className="text-[28px] text-primary-orange self-start mt-[10px]" />
                <p className="dm-sans-400 text-[20px] mt-[15px] px-2 md:px-10">
                  {testimonial?.quote}
                </p>
                <FaQuoteRight className="text-[28px] text-primary-orange self-end" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
