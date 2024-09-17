import Awards from "../components/Awards/Awards";
import FAQ from "../components/FAQ/FAQ";
import Guidelines from "../components/Guidelines/Guidelines";
import Guildline from "../components/Guildline/Guildline";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Sponsors from "../components/Sponsors/Sponsors.jsx";
import Stats from "../components/Stats/Stats";
import Testimonial from "../components/Testimonial/Testimonial";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <Awards />
      <Testimonial />
      <Guidelines />
      <Timeline />
      <FAQ />
      <Sponsors />
      <Stats />
      <Guildline />
    </>
  );
}
