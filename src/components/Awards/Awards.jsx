import { landingPageData } from "../../lib/data/landingPageData";
import Header from "../common/Typography/Header";

const Awards = () => {
  return (
    <section className="py-12">
      <div className="container bg-black mx-auto px-8 py-10 text-center rounded-md dm-sans-400">
        <Header
          title={landingPageData?.awardSection?.title}
          subtitle={landingPageData?.awardSection?.content}
          className={"mb-10"}
        />

        {/* cards container */}
        <div className="flex flex-col sm:flex-row gap-x-6 gap-y-6 md:gap-y-14 p-6 sm:flex-wrap lg:flex-nowrap justify-evenly">
          {landingPageData.awardSection.awards.map((award, index) => (
            <div
              key={index}
              className="p-[3px] w-full bg-gradient-to-r from-orange-500 to-orange-950 rounded-3xl transition-transform transform flex justify-center items-center order-2 sm:order-none"
            >
              <div className="w-full h-full bg-black drop-shadow-orange-glow-bright rounded-3xl flex flex-col justify-center items-center py-[24px] md:py-[54px] px-[50px] gap-y-6">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-auto h-[120px] md:h-[200px] object-contain"
                />
                {/* Medal Icon */}
                <div className="text-center flex flex-col justify-center items-center">
                  <h2 className="text-[24px] dm-sans-400 text-white">
                    {award.title}
                  </h2>
                  {/* <h3
                    className={`text-[36px] md:text-[48px] text-white ${award.title === "Winner" ? "orange-text-gradient font-extrabold dm-sans-800" : "silver-text-gradient font-extrabold dm-sans-800"}`}
                  >
                    {award.prize}
                  </h3> */}
                  <p className="bg-gradient-to-br px-4 py-2 rounded-full mt-4 animate-pulse text-white text-[20px] dm-sans-600">
                    Revealing Soon
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
