import Countdown from "../Countdown/Countdown";

import HeaderAnimation from "./HeroAnimation";

export default function Hero() {
  return (
    <section className="hero relative bg-transparent min-h-[calc(80svh-68px)] text-white">
      <HeaderAnimation />
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Are you Ready?</h1>
          <p className="py-6">
            SLIITXtreme 2024 is around the corner. Register your team now to
            secure your spot!
          </p>
          <Countdown />
          <button className="btn btn-primary">Register Now</button>
        </div>
      </div>
    </section>
  );
}
