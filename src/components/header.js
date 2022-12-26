import React, { useCallback, useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import useDarkMode from "../hooks/use-dark-mode";
import useScrollPosition from "../hooks/use-scroll-position";
import { MenuContext, MENU_ACTION } from "../providers/menu-provider";
import Branding from "./branding";
import FragmentLink from "./fragment-link";
import Hamburger from "./hamburger";
import Menu from "./menu";
import SocialMediaNavigation from "./social-media-navigation";
import { ReactComponent as LightModeIcon } from "../images/light-mode.svg";
import { ReactComponent as DarkModeIcon } from "../images/dark-mode.svg";

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
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const { isScrollTop, lastScrollY } = useScrollPosition();
  const { state, dispatch } = useContext(MenuContext);

  const isInitialPosition = lastScrollY === 0;

  const getPaddingClass = useCallback(
    () => (isInitialPosition ? "lg:py-10" : "lg:py-8"),
    [isInitialPosition]
  );

  const getShadowClass = useCallback(
    () => (isInitialPosition || state.isOpen ? "px-7 shadow-none" : "px-9"),
    [isInitialPosition, state]
  );

  const getTranslateClass = () =>
    lastScrollY > 100 && isScrollTop && !state.isOpen
      ? "-translate-y-32"
      : "translate-y-0";

  return (
    <>
      <header
        className={`
        bg-white dark:bg-primary-200 fixed py-7 md:px-16 lg:px-20 xl:px-32 2xl:px-64 font-bold shadow-lg transform transition-all-no-bg duration-500 top-0 w-full z-30
          ${getShadowClass()} ${getTranslateClass()} ${getPaddingClass()}
      `}
      >
        <ScrollAnimation
          animateIn="fade"
          animateOnce={true}
          className="flex items-center justify-between"
          offset={0}
        >
          <Branding />
          <Hamburger
            className="lg:hidden ml-auto"
            handleClick={() => dispatch({ type: MENU_ACTION.TOGGLE })}
            isActive={state.isOpen}
          />
          <nav className="items-center lg:flex">
            <div className="hidden lg:block">
              {navItems.map((item) => (
                <FragmentLink id={item.id} key={item.id}>
                  {item.label}
                </FragmentLink>
              ))}
              <a
                className="hover:float border-2 inline-block ml-4 px-4 py-2 font-semibold rounded-full text-sm dark:text-gray-50 text-gray-600 hover:text-gray-700"
                download
                href="/resume.pdf"
              >
                Resume
              </a>
            </div>
          </nav>
        </ScrollAnimation>
      </header>

      <Menu className="pt-28">
        <nav className="flex flex-col mb-12">
          {navItems.map((item) => (
            <div className="px-1 pb-5" key={item.id}>
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
          <div className="px-3">
            <a
              className="hover:bg-gray-100 border-4 ml-4 px-8 py-3 font-semibold inline-block rounded-xl transition-all text-md text-gray-500 dark:text-gray-200 hover:text-gray-600"
              download
              href="/resume.pdf"
            >
              Resume
            </a>
          </div>
        </nav>
        <div className="px-7">
          <h5 className="font-semibold mb-1 text-sm dark:text-gray-400">
            Contact me at
          </h5>
          <p className="mb-12 dark:text-gray-200">contact@wintersteve.com</p>
          <div className="mb-12">
            <SocialMediaNavigation
              theme={isDarkMode ? "white" : "primary-200"}
              iconClass="mr-5 w-10"
            />
          </div>
        </div>
      </Menu>
    </>
  );
}

export default Header;
