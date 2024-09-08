import HeaderAnimation from "./HeroAnimation";

export default function Hero() {
  return (
    <section className="hero relative bg-transparent min-h-[calc(80svh-68px)] text-white">
      <HeaderAnimation />
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">The All-Round Hackathon</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Register Now</button>
        </div>
      </div>
    </section>
  );
}
