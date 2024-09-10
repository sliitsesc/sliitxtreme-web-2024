import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Awards from "../components/Awards/Awards";
import FAQ from "../components/FAQ/FAQ";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection />
      <Awards />
      <Testimonial />
      <FAQ />
    </>
  );
}
