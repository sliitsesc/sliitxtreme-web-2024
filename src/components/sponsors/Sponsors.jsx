import { landingPageData } from "../../lib/data/landingPageData";
import Header from "../common/Typography/Header";

export default function Sponsors() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-8">
        <Header
          title={"Sponsors"}
          className={"mb-12"}
          subtitle={"Meet our esteemed sponsors who make this event possible."}
        />

        <div className="flex flex-col md:flex-row gap-10">
          {landingPageData?.sponsors?.sponsors?.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col w-full bg-black rounded-3xl p-[4px] items-center justify-center bg-gradient-to-br from-orange-500 to-orange-950 transition-transform transform order-2 sm:order-none drop-shadow-orange-glow-bright"
            >
              <div className="bg-black w-full h-full flex p-6 flex-col justify-center items-center rounded-[22px]">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-[100px] opacity-80 mb-4"
                />
                <h2 className="dm-sans-600 text-[36px] text-white">
                  {sponsor?.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
