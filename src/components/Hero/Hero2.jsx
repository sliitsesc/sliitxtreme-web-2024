import Countdown from "../Countdown/Countdown";

import HeaderAnimation2 from "./HeroAnimation2";

export default function Hero() {
  return (
    <section className="hero relative bg-transparent min-h-[calc(80svh-68px)] text-white">
      <HeaderAnimation2 />
      <div className="text-center hero-content">
        <div className="max-w-max">
          <h1 className="text-5xl font-normal">The Hackathon of the Year</h1>
          <p className="py-6 pb-8 text-xl font-normal">
            Welcome to the Hackathon of the Year-SLIITXtream 2024
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus assumenda perspiciatis 
            vitae suscipit. Deleniti dolore harum culpa obcaecati cumque voluptatem quam fugit sapiente 
            laboriosam rem dolorem, totam quia et nulla!
            Deleniti dolore harum culpa obcaecati cumque voluptatem quam fugit sapiente 
            laboriosam rem dolorem, totam quia et nulla!laboriosam rem dolorem, totam quia et nulla!
          </p>
          <Countdown />
          <div className="container grid-rows-2 space-x-3">
            <button className="btn bg-white border-3 border-black">Explore</button>
            <button className="btn bg-orange-500 text-white">Register Now</button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
