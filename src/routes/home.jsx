import Awards from "../components/Awards/Awards";
import Guildline from "../components/Guildline/Guildline";
import FAQ from "../components/FAQ/FAQ";
import Testimonial from "../components/Testimonial/Testimonial";
import Guidelines from "../components/Guidelines/Guidelines";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Timeline from "../components/Timeline/Timeline";
import Stats from "../components/Stats/Stats";
import Background from "../components/Common/background.jsx";

export default function Home() {
  return (
    <>
 <div className="z-60">
      <Hero />
      <InfoSection />
      <Awards />
      <Testimonial />
      <Guidelines />
      <Timeline />
      <FAQ />
      <Stats/>
      <Guildline />
 </div>
        <Background/>
    </>
  );
}
