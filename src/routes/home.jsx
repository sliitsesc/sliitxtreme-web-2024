import Awards from "../components/Awards/Awards";
import FAQ from "../components/FAQ/FAQ";
import Testimonial from "../components/Testimonial/Testimonial";
import Guidelines from "../components/Guidelines/Guidelines";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Timeline from "../components/Timeline/Timeline";
import Stats from "../components/Stats/Stats";
import Sponsors from "../components/Sponsors/Sponsors.jsx";

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
        <Sponsors/>
      <Stats/>
    </>
  );
}
