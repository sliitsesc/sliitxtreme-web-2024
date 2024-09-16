import heroGridsImage from "../../../public/images/Grid.svg";
import Button from "../common/Button/Button";

export default function Hero() {
  return (
    <section className="h-[calc(100svh-68px)] min-h-[600px] md:h-[770px]  px-2 text-white text-center flex flex-col justify-center bg-gradient-to-br from-primary-blue to-primary-orange relative overflow-x-hidden">
      <img
        src={heroGridsImage}
        className="absolute object-cover w-full h-full z-0 opacity-35"
      />
      <div className="container flex flex-col items-center mx-auto z-[1] text-center">
        <h1 className="text-[52px] leading-[52px] md:leading-normal md:text-[48px] font-bold dm-sans-600 mb-4 md:mb-2">
          The Hackathon of the Year
        </h1>
        <p className="text-[24px] leading-[30px] md:leading-normal md:text-[28px] font-normal dm-sans-400 max-w-[340px] md:max-w-[768px]">
          Welcome to the Hackathon of the Year— SLIITXtreme 2024 Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="inline-flex gap-x-4 mt-6">
          <Button text="Explore" link="#" color="white" />
          <Button text="Register Now" link="#" color="orange" />
        </div>
      </div>
    </section>
  );
}
