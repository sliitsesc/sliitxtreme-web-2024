import { twMerge } from "tailwind-merge";

import { landingPageData } from "../../lib/data/landingPageData";
import Header from "../common/Typography/Header";

const timelineData = landingPageData?.timelineSection;

export default function Timeline() {
  return (
    <section className="bg-white-200 relative">
      <div className="bg-hero-grids bg-repeat absolute h-full w-full opacity-40"></div>
      <div className="bg-timeline-bg-black-gradient absolute h-full w-full"></div>
      <div className="container mx-auto py-20">
        <Header title={"The Timeline"} />
        <div className="relative h-full w-full">
          <div className="bg-timeline-gradient absolute lg:left-1/2 w-[3px] -ml-[1px] h-full z-[1]"></div>
          <div className="flex flex-col gap-y-4 py-28">
            {timelineData?.events?.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  `flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-center items-center w-full z-10`,
                )}
              >
                {/* Left section */}
                <div
                  className={`w-5/12 p-[4px] ${index % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"} drop-shadow-orange-glow-bright from-orange-950 to-orange-500 rounded-[24px] transition-transform transform flex justify-center items-center`}
                >
                  <div className="w-full h-full flex flex-col bg-black rounded-[20px] px-[52px] py-[42px] pt-[36px] text-white">
                    <h2 className="dm-sans-600 md:text-[36px] md:leading-[47px]">
                      {item?.title}
                    </h2>
                    <p className="dm-sans-italic font-medium text-[22px] text-gray-500 mb-4">
                      {item?.date}
                    </p>
                    <p className="text-[22px]">{item?.description}</p>
                  </div>
                </div>
                {/* connecting line left */}
                <div className="bg-primary-orange h-[3px] w-[50px]"></div>
                {/* Center dot */}
                <div className="bg-black flex justify-center items-center border-[3px] border-primary-orange p-[2px] w-[35px] h-[35px] rounded-full z-10"></div>
                {/* connecting line right */}
                <div className="bg-transparent h-[2px] w-[50px]"></div>

                {/* Right section */}
                <div className="w-5/12 border opacity-0">Z</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
