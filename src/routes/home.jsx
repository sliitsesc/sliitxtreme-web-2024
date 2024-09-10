import Awards from "../components/Awards/Awards";
import Guildline from "../components/Guildline/Guildline";
import FAQ from "../components/FAQ/FAQ";
import Guidelines from "../components/Guidelines/Guidelines";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <Awards />
      <Guidelines />
      <Timeline />
      <FAQ />
      <Guildline />
    </>
  );
}
