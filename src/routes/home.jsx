import { Helmet } from "react-helmet-async";

import OG_Image from "../../public/images/og-image/OG_Image.png";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/Info/InfoSection";
import Stats from "../components/Stats/Stats";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="SLIITXtreme 2024 hosted by the IEEE Student Chapter of 
        SLIIT in collaboration with the Software Engineering Student Community of SLIIT"
        />
        <link rel="canonical" href="/" />
        {/* <meta property="og:description" content={description} /> */}
        <meta property="og:image" content={OG_Image} />
      </Helmet>
      <Hero />
      <InfoSection />
      <Stats />
    </>
  );
}
