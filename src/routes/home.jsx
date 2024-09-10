import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Awards from "../components/Awards/Awards";
import Guildline from "../components/Guildline/Guildline";
import FAQ from "../components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <Awards />
      <FAQ />
      <Guildline />
    </>
  );
}
