import React, { useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import useScrollPosition from "../hooks/use-scroll-position";
import { MenuContext, MENU_ACTION } from "../providers/menu-provider";
import Branding from "./branding";
import FragmentLink from "./fragment-link";
import Hamburger from "./hamburger";
import Menu from "./menu";
import SocialMediaNavigation from "./social-media-navigation";

const navItems = [
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

function Header() {
  const { isScrollTop, lastScrollY } = useScrollPosition();
  const { state, dispatch } = useContext(MenuContext);

  return (
    <>
      <header
        className={`bg-white duration-500 py-7 lg:py-8 px-8 md:px-16 lg:px-20 xl:px-32 2xl:px-64 font-bold shadow-lg sticky transform transition-all top-0 z-50 ${
          lastScrollY === 0 && "shadow-none"
        } ${
          lastScrollY > 100 && isScrollTop ? "-translate-y-32" : "translate-y-0"
        }`}
      >
        <ScrollAnimation
          animateIn="fade"
          className="flex justify-between items-center"
          offset={0}
        >
          <Branding />
          <nav className="hidden lg:block">
            {navItems.map((item) => (
              <FragmentLink id={item.id} key={item.id}>
                {item.label}
              </FragmentLink>
            ))}
            <a
              className="hover:float border-2 inline-block ml-4 px-4 py-2 font-semibold rounded-full text-sm text-gray-600 hover:text-gray-700"
              download
              href="/resume.pdf"
            >
              Resumé
            </a>
          </nav>
          <Hamburger
            className="lg:hidden"
            handleClick={() => dispatch({ type: MENU_ACTION.TOGGLE })}
            isActive={state.isOpen}
          />
        </ScrollAnimation>
      </header>

      <Menu className="pt-28">
        <nav className="flex flex-col mb-12">
          {navItems.map((item) => (
            <div className="px-2 pb-5" key={item.id}>
              <FragmentLink
                callback={() => dispatch({ type: MENU_ACTION.CLOSE })}
                className="text-md px-5"
                id={item.id}
                offset={20}
              >
                {item.label}
              </FragmentLink>
            </div>
          ))}
          <div className="px-4">
            <a
              className="hover:bg-gray-100 border-4 ml-4 px-8 py-3 font-semibold inline-block rounded-xl transition-all text-md text-gray-500 hover:text-gray-600"
              download
              href="/resume.pdf"
            >
              Resumé
            </a>
          </div>
        </nav>
        <div className="px-8">
          <h5 className="font-semibold mb-1 text-md">Contact me at</h5>
          <p className="mb-12">contact@wintersteve.com</p>
          <div className="mb-12">
            <SocialMediaNavigation theme="gray" iconClass="mr-4 w-8" />
          </div>
        </div>
      </Menu>
    </>
  );
}

export default Header;
