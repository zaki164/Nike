import { useEffect, useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Button from "./Button";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navOpen, setnavOpen] = useState(false);
  const [user, setUser] = useState(false);

  // google login function
  const googleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse.access_token);
      Cookies.set("nike", credentialResponse.access_token);
      setUser(true);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // google logout function
  const googleLogOut = () => {
    Cookies.remove("nike");
    setUser(false);
    googleLogout();
  };

  useEffect(() => {
    Cookies.get("nike") ? setUser(true) : setUser(false);
  }, []);

  return (
    <header className="absolute top-0 left-0 flex_between py-6 w-full z-10">
      <Link href="/">
        <img src={headerLogo} alt="logo" />
      </Link>
      <nav className="md:flex_between md:flex-1 hidden xl:mr-16">
        <ul className="flex_center md:gap-8 lg:gap-20 flex-1 text-base lg:text-lg">
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
        <div className="flex_center gap-4">
          {user ? (
            <Button label="Log out" semibold onClick={googleLogOut} />
          ) : (
            <Button label="Log in" semibold onClick={googleLogin} />
          )}
        </div>
      </nav>
      <span
        className="md:hidden cursor-pointer"
        onClick={() => setnavOpen(!navOpen)}
      >
        <img src={hamburger} alt="hamburger icon" width={25} height={25} />
      </span>
      <nav
        className={`md:hidden absolute transition duration-300 z-20 ${
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
        {user ? (
          <button
            onClick={() => googleLogOut()}
            className="font-semibold p-2 text-lg lg:text-xl font-montserrat transition-all duration-300 text-coral-red hover:pl-4"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => googleLogin()}
            className="font-semibold p-2 text-lg lg:text-xl text-white-400 font-montserrat transition-all duration-300 hover:text-coral-red hover:pl-4"
          >
            Log in
          </button>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
