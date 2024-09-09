import Awards from "../components/Awards/Awards";
import FAQ from "../components/FAQ/FAQ";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Timeline from "../components/Timeline/timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <Awards />
      <Timeline />
      <FAQ />
    </>
  );
}
