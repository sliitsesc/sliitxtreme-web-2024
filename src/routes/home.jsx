import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="SLIITXtreme 2024 hosted by the IEEE Student Chapter of 
       SLIIT in collaboration with the Software Engineering Student Community of SLIIT" />
      <link rel="canonical" href="/home" />
    </Helmet>
    
      <Hero />
      <InfoSection />
    </>
  );
}
