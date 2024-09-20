import { twMerge } from "tailwind-merge";

import { landingPageData } from "../../lib/data/landingPageData";
import { formatDateTime } from "../../lib/utils/dateTimeUtils";
import {
  getCurrentEventIndex,
  isEventUpcoming,
} from "../../lib/utils/timelineUtils";
import Header from "../common/Typography/Header";

const timelineData = landingPageData?.timelineSection;

export default function Timeline() {
  const currentEventIndex = getCurrentEventIndex(timelineData);

  return (
    <section className="bg-white-200 relative">
      <div className="bg-hero-grids bg-repeat absolute h-full w-full opacity-40"></div>
      <div className="bg-timeline-bg-black-gradient absolute h-full w-full"></div>
      <div className="container mx-auto lg:py-20 lg:px-0 px-10">
        <Header title={"The Timeline"} />
        <div className="relative h-full w-full">
          <div className="bg-timeline-gradient absolute left-[16px] lg:left-1/2 w-[3px] -ml-[1px] h-full z-[1]"></div>
          <div className="flex flex-col gap-y-4 py-28">
            {timelineData?.events?.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  `flex flex-row-reverse ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} justify-center items-center w-full z-10`,
                )}
              >
                {/* Left section */}
                <div
                  className={`w-full lg:w-5/12 bg-gradient-to-l p-[4px] ${index % 2 === 0 ? "lg:bg-gradient-to-r" : "lg:bg-gradient-to-l"} ${currentEventIndex === index ? "drop-shadow-orange-glow-bright" : ""} ${isEventUpcoming(item?.date) ? "dashed-border odd" : ""} from-orange-950 to-orange-500 rounded-[24px] transition-transform transform flex items-start justify-start lg:justify-center lg:items-center`}
                >
                  <div className="w-full h-full flex flex-col bg-black rounded-[20px] p-4 px-5 pt-3 lg:px-[52px] lg:py-[42px] lg:pt-[36px] text-white">
                    <h2 className="dm-sans-600 text-[24px] lg:text-[36px] lg:leading-[47px]">
                      {item?.title}
                    </h2>
                    <p className="dm-sans-italic font-medium text-[16px] lg:text-[22px] text-gray-500 mb-2 lg:mb-4">
                      {formatDateTime(item?.date)}
                    </p>
                    <p className="text-[16px] lg:text-[22px]">
                      {item?.description}
                    </p>
                  </div>
                </div>
                {/* connecting line left */}
                <div className="bg-primary-orange h-[3px] w-[25px] lg:w-[50px]"></div>
                {/* Center dot */}
                <div className="bg-black flex border-[3px] border-primary-orange p-[2px] w-8 h-8 lg:w-[35px] lg:h-[35px] rounded-[200px] z-10"></div>
                {/* connecting line right */}
                <div className="hidden lg:block bg-transparent h-[2px] w-[50px]"></div>
                {/* Right section */}
                <div className="w-5/12 border opacity-0 hidden lg:block">Z</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
