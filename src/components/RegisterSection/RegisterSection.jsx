import heroGridsImage from "../../../public/images/Grid.svg";
import Countdown from "../Countdown/Countdown";
import Header from "../common/Typography/Header";

export default function RegisterSection() {
  return (
    <div className="bg-gradient-to-r from-[#11A3D6] via-black to-[#884116] relative overflow-x-hidden">
      <img
        src={heroGridsImage}
        className="absolute object-cover w-full h-full z-0 opacity-[25%]"
      />
      <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-b from-[#000000] via-[#00000000] via-[40%] to-[#000000] absolute"></div>
      <section className="h-[calc(100svh)] min-h-[400px] md:h-[calc(100vh-68px)] md:min-h-[500px] md:max-h-[900px] px-2 text-white text-center flex flex-col justify-center z-[1]">
        <div className="container flex flex-col items-center mx-auto z-[1] text-center ">
          <Header
            title={"Registration"}
            subtitle={
              "Gather up your team and stay tuned. Registrations will be starting in..."
            }
            className={"mb-8"}
          />
          <Countdown />
          {/* <div className="inline-flex gap-x-4 mt-[42px]">
            <Button
              text="Explore"
              link="#"
              color="white"
              className={"drop-shadow-white-glow"}
            />
            <Button
              text="Register Now"
              link="#"
              color="orange"
              className={"drop-shadow-orange-glow"}
            />
          </div> */}
        </div>
      </section>
    </div>
  );
}
