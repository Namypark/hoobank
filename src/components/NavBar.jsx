import { logo, close, menu } from "../assets";
import { useState } from "react";
import { navLinks } from "../constants/";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={"w-full py-6 flex  justify-between items-center navbar"}>
      <div className="">
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            id={index + 1}
            className={`font-poppins text-dimWhite font-normal cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  border-solid border-2 border-sky-500`}
          >
            <a
              href={`${nav.id}`}
              className="transition ease-in delay-150 hover:text-white"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex justify-end items-center flex-1">
        <img
          src={isOpen ? close : menu}
          alt="menu-icon"
          className="w-[24px] h-[24px] object-contain mr-2"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 min-w-[140px] mx-3  rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center  flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                id={index + 1}
                className={`font-poppins text-[16px] text-dimWhite font-normal cursor-pointer mb-3 ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } `}
              >
                <a
                  href={`#`}
                  className="transition ease-in delay-150 hover:text-white-100"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
