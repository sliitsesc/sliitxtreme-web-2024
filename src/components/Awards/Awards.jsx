import { landingPageData } from "../../lib/data/landingPageData";

const Awards = () => {
  return (
    <section className="py-12">
      <div className="container bg-black mx-auto px-8 py-10 text-center rounded-md dm-sans-400">
        <div className="text-center mb-8">
          <h1 className="text-[48px] dm-sans-600 font-bold text-white mb-5 drop-shadow-white-glow">
            Prize Pool
          </h1>
          <p className="text-[20px] text-white">
            {landingPageData.awardSection.content}
          </p>
        </div>
        {/* cards container */}
        <div className="flex flex-col sm:flex-row gap-y-6 md:gap-y-8 p-6 flex-wrap justify-evenly">
          {landingPageData.awardSection.awards.map((award, index) => (
            <div
              key={index}
              className="p-[2px] bg-gradient-to-r from-orange-500 to-orange-950 rounded-3xl transition-transform transform flex justify-center items-center order-2 sm:order-none"
            >
              <div className="w-full h-full bg-black drop-shadow-orange-glow-bright rounded-3xl flex flex-col justify-center items-center py-[24px] md:py-[54px] px-[50px] gap-y-6">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-auto h-[120px] md:h-[200px] object-contain"
                />
                {/* Medal Icon */}
                <div className="text-center">
                  <h2 className="text-[24px] dm-sans-400 text-white">
                    {award.title}
                  </h2>
                  <h3
                    className={`text-[36px] md:text-[48px] text-white ${award.title === "Winner" ? "orange-text-gradient font-extrabold dm-sans-800" : "dm-sans-600"}`}
                  >
                    {award.prize}
                  </h3>
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
