import React from "react";
import FragmentLink from "./fragment-link";
import Hamburger from "./hamburger";

const navItems = [
  {
    id: "services",
    label: "Services",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "competencies",
    label: "Competencies",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "certificates",
    label: "Certificates",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function Header({ isScrollTop, lastScrollY }) {
  return (
    <>
      <header
        className={`bg-white duration-500 py-9 px-56 flex font-bold justify-between items-center sticky transition-all z-50 ${
          lastScrollY === 0 && "shadow-none"
        } ${isScrollTop ? "-top-32 shadow-2xl" : "top-0 shadow-lg"}`}
      >
        <h1>
          <span className="text-gray-600 text-xl font-bold mr-3">
            Steve Winter
          </span>
          <span className="text-gray-400 text-xs font-bold">
            Full-Stack Web Developer
          </span>
        </h1>
        <nav>
          {navItems.map((item) => (
            <FragmentLink id={item.id} key={item.id}>
              {item.label}
            </FragmentLink>
          ))}
          <button className="border-2 ml-4 px-3 py-2 font-semibold rounded-sm text-sm text-gray-500">
            Resumé
          </button>
        </nav>
        <Hamburger />
      </header>
    </>
  );
}

export default Header;
