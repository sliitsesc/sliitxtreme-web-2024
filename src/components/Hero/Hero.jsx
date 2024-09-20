import heroGridsImage from "../../../public/images/Grid.svg";
import Navbar from "../Navbar/Navbar";
import Button from "../common/Button/Button";

export default function Hero() {
  return (
    <div
      className="bg-gradient-to-r from-[#11A3D6] via-black to-[#884116] relative overflow-x-hidden"
      id="home"
    >
      <img
        src={heroGridsImage}
        className="absolute object-cover w-full h-full z-0 opacity-[25%]"
      />
      <div className="hidden md:block w-full h-full bg-gradient-to-b md:bg-gradient-to-b from-[#00000070] via-[#00000000] via-[40%] to-[#000000] absolute"></div>
      <div className="block md:hidden w-full h-full bg-gradient-to-b md:bg-gradient-to-b from-[#000000] via-[#00000000] via-[40%] to-[#000000] absolute"></div>
      <Navbar className={"z-[1] text-white"} />
      <section className="h-[calc(100svh)] min-h-[400px] md:h-[calc(100vh-68px)] md:min-h-[500px] md:max-h-[900px] px-2 text-white text-center flex flex-col justify-center z-[1]">
        <div className="container flex flex-col items-center mx-auto z-[1] text-center -mt-[105px]">
          <h1 className="text-[38px] sm:text-[48px] leading-[52px] max-w-[340px] sm:max-w-none md:leading-[64px] md:text-[62px] font-bold dm-sans-600 mb-4 md:mb-6 drop-shadow-white-glow">
            SLIITXtreme 3.0
            <br />
            The Programming Hackathon
          </h1>
          <p className="text-[23.4px] leading-[30px] md:leading-normal md:text-[23.4px] font-normal dm-sans-400 max-w-[500px] sm:max-w-[600px] md:max-w-[768px] md:mb-2">
            Join the Coding Elite at SLIITXtreme 3.0<br/> Connect with the brightest
            minds, push your limits, and shape the future of technology.
          </p>
          <div className="inline-flex gap-x-4 mt-6">
            <Button
              text="Explore More"
              link="#about"
              color="white"
              className={"drop-shadow-white-glow"}
            />
            {/* <Button
              text="View Timeline"
              link="#"
              color="white"
              className={"drop-shadow-white-glow"}
            /> */}
            {/* <Button
              text="Register Now"
              link="#"
              color="orange"
              className={"drop-shadow-orange-glow"}
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
