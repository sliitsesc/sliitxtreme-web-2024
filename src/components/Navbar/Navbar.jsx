// props validation
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

import XtremeLogo from "../../../public/logos/xtreme logo.svg";
import Button from "../common/Button/Button";

Navbar.propTypes = {
  className: PropTypes.string,
};

export default function Navbar({ className }) {
  return (
    <nav className={twMerge("bg-transparent", className)}>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="text-xl cursor-pointer font-bold">
            <img
              src={XtremeLogo}
              alt="Xtreme Logo"
              className="w-[150px] md:w-[200px] drop-shadow-white-glow"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4 text-[16px] font-medium">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#prizes">Awards</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#organizers">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <Button
          
            text="Register Now"
            link="#"
            color="orange"
            className={"z-[99] drop-shadow-orange-glow hidden lg:block"}
          /> */}
          <Button
            text="Explore"
            link="#about"
            color="white"
            className={"z-[99] drop-shadow-white-glow hidden lg:block"}
          />
          {/* mobile menu */}
          <div className="dropdown z-[99]">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-[#FFFFFF10] backdrop-blur-lg dropdown-content rounded-box mt-3 w-52 p-2 shadow right-0 text-white dm-sans-600 font-bold"
            >
              <li>
                <a href="#home" className="py-3 text-[16px]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="py-3 text-[16px]">
                  About
                </a>
              </li>
              <li>
                <a href="#prizes" className="py-3 text-[16px]">
                  Awards
                </a>
              </li>
              <li>
                <a href="#timeline" className="py-3 text-[16px]">
                  Timeline
                </a>
              </li>
              <li className="">
                <a href="#organizers" className="py-3 text-[16px]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
