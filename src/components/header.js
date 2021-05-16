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
        className={`bg-white duration-500 py-7 lg:py-9 px-8 md:px-28 2xl:px-56 flex font-bold justify-between items-center shadow-lg sticky transform transition-all top-0 z-50 ${
          lastScrollY === 0 && "shadow-none"
        } ${
          lastScrollY > 100 && isScrollTop ? "-translate-y-32" : "translate-y-0"
        }`}
      >
        <h1>
          <span className="text-gray-600 text-xl font-bold mr-3">
            Steve Winter
          </span>
          <span className="block xl:inline text-gray-400 text-xs font-bold">
            Full-Stack Web Developer
          </span>
        </h1>
        <nav className="hidden lg:block">
          {navItems.map((item) => (
            <FragmentLink id={item.id} key={item.id}>
              {item.label}
            </FragmentLink>
          ))}
          <a
            className="border-2 ml-4 px-3 py-2 font-semibold rounded-sm text-sm text-gray-500"
            download
            href="/resume.pdf"
          >
            Resumé
          </a>
        </nav>
        <Hamburger className="lg:hidden" />
      </header>
    </>
  );
}

export default Header;
