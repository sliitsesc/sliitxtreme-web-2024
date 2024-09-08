export default function InfoSection() {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-y-10 md:gap-x-10 py-16 px-8">
        {/* slideshow */}
        <div className="w-full bg-slate-200">
          <img
            src="https://i.pinimg.com/1200x/91/92/c9/9192c99c14e8f9d303a5ecfefd96ecc9.jpg"
            className="w-full h-[400px] object-cover grayscale"
          />
        </div>

        {/* content */}
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold">What is SLIITXtreme?</h1>
          <p className="py-6 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>
          <button className="btn btn-primary w-fit">Get Started</button>
        </div>
      </div>
    </section>
  );
}
