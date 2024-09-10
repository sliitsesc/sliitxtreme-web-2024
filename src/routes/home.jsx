import Awards from "../components/Awards/Awards";
import FAQ from "../components/FAQ/FAQ";
import Guidelines from "../components/Guidelines/Guidelines";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <Awards />
      <Guidelines />
      <FAQ />
    </>
  );
}
