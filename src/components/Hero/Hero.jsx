import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                Open-Source Web Template for SaaS, Startup, Apps, and More
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                Multidisciplinary Web Template Built with Your Favourite Technology - HTML Bootstrap, Tailwind and React NextJS.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <a
                    href="https://links.tailgrids.com/play-download"
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                  >
                    Download Now
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tailgrids/play-tailwind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                  >
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2005_10818)">
                        <path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 14.8253 4.575 11.2873C4.575 10.0248 5.0375 8.8498 5.7125 7.8873C5.650 7.5248 5.275 6.0498 5.675 4.7123C5.675 4.7123 6.450 4.3998 7.725 5.0373C8.5 4.8873 9.3125 4.7873 10.175 4.7873C11.0375 4.7873 11.850 4.8873 12.625 5.0373C13.9125 4.3998 14.7125 4.7123 14.7125 4.7123C15.0875 6.0498 14.7375 7.5248 14.7125 7.8873C15.3875 8.8498 15.8625 10.0248 15.8625 11.2873C15.8625 14.8253 13.125 17.0623 10.575 17.3248C11.000 17.6123 11.375 18.0248 11.375 18.6123C11.375 19.3498 11.3625 21.7123 11.3625 22.7998C11.3625 23.0623 11.550 23.4373 12.150 23.3248C16.800 21.7498 20.1375 17.3998 20.1375 12.2998C20.1375 5.8498 14.8875 0.674805 12 0.674805Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2005_10818">
                          <rect width="24" height="24" />
                        </clipPath>
                      </defs>
                    </svg>
                    View on GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
