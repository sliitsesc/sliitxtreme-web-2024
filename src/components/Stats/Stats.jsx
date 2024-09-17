import { landingPageData } from "../../lib/data/landingPageData";

function Stats() {
  return (
    <section className="py-4 md:py-20">
      <div className="container mx-auto ">
        <h1 className="text-white text-center text-[40px] lg:text-[48px] font-bold drop-shadow-white-glow mb-10">
          {landingPageData?.statSection?.title}
        </h1>
        <div className="px-8 flex flex-col md:flex-row md:gap-x-4 lg:gap-x-16 justify-center flex-wrap items-center">
          {landingPageData.statSection.stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-4 rounded-3xl text-white"
            >
              <h2 className="text-[48px] sm:text-[64px] font-bold dm-sans-800 -mb-[10px] orange-text-gradient drop-shadow-orange-glow">
                {stat.number}
              </h2>
              <p className="text-[28px] dm-sans-400 drop-shadow-white-glow">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
