import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const NavBar = () => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 flex_between py-6 w-full z-10 px-4">
      <a href="#">
        <img src={headerLogo} alt="logo" />
      </a>
      <nav className="md:flex_between md:flex-1 hidden md:mr-16">
        <ul className="flex_center md:gap-12 lg:gap-20 flex-1 text-base lg:text-lg">
          {navLinks?.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="font-montserrat text-slate-gray transition duration-300 hover:text-coral-red"
            >
              <li>{item.label}</li>
            </a>
          ))}
        </ul>
        <a href="#" className="font-semibold text-lg lg:text-xl text-coral-red">
          Sign in
        </a>
      </nav>
      <span
        className="md:hidden cursor-pointer"
        onClick={() => setnavOpen(!navOpen)}
      >
        <img src={hamburger} alt="hamburger icon" width={25} height={25} />
      </span>
      <nav
        className={`md:hidden absolute transition duration-300 ${
          navOpen ? "top-full opacity-1" : "-top-[300%] opacity-0"
        } w-full bg-slate-gray pb-2 rounded`}
      >
        <ul className="flex flex-col text-base">
          {navLinks?.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="font-montserrat p-2 text-white-400 transition-all duration-300 hover:text-coral-red hover:pl-4"
            >
              <li>{item.label}</li>
            </a>
          ))}
        </ul>
        <a
          href="#"
          className="font-semibold p-2 text-lg lg:text-xl text-coral-red"
        >
          Sign in
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
