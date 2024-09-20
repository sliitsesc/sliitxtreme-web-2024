import parse from "html-react-parser";

import heroGridsImage from "../../../public/images/Grid.svg";
import { landingPageData } from "../../lib/data/landingPageData";
import Header from "../common/Typography/Header";

export default function FAQ() {
  return (
    <section className="relative">
      <img
        src={heroGridsImage}
        className="absolute object-cover w-full h-full z-0 opacity-[25%]"
      />
      <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-b from-[#00000070] via-[#00000000] via-[40%] to-[#000000] absolute"></div>

      <div className="container mx-auto">
        <div className="px-8 py-16 gap-y-10 md:gap-x-10">
          <Header title={"Frequently Asked Questions"} className={"mb-10"} />
          {landingPageData?.FAQSection?.questions?.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow mb-4 bg-[#FFFFFF10] backdrop-blur-sm"
            >
              <input type="checkbox" name={`faq-${index}`} />
              <div className="dm-sans-600 text-white text-[24px] font-medium collapse-title">
                {faq.question}
              </div>
              <div className="dm-sans-400 text-[20px] text-[#FFFFFF90] collapse-content">
                <p>{parse(faq?.answer)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
