import { landingPageData } from "../../lib/data/landingPageData";
import Header from "../common/Typography/Header";

export default function Organizers() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-8">
        <Header
          title={"Organized by"}
          className={"mb-12"}
          //   subtitle={"Meet our esteemed sponsors who make this event possible."}
        />

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {landingPageData?.organizedBy?.logos?.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col rounded-3xl p-[4px] items-center justify-center "
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-[200px] opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
