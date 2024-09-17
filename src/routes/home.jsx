import { Helmet } from "react-helmet-async";

import Awards from "../components/Awards/Awards";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Stats from "../components/Stats/Stats";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="SLIITXtreme 2024 hosted by the IEEE Student Chapter of 
        SLIIT in collaboration with the Software Engineering Student Community of SLIIT"
        />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="SLIITXtreme 3.0 - 2024" />
        <meta property="og:url" content="https://sliitxtreme.ieeesliit.com" />
        <meta property="og:description" content="SLIITXtreme 3.0 - 2024" />
        <meta property="og:image" content="/images/OG_Image.png" />
      </Helmet>

      <Hero />
      <InfoSection />
      <Stats />
      <Awards />
    </>
  );
}
