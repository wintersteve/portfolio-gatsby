import * as React from "react";
import Banner from "../components/banner";
import BottomNavigation from "../components/bottom-navigation";
import Chat from "../components/chat";
import Header from "../components/header";
import About from "../sections/about";
import Certificates from "../sections/certificates";
import Competencies from "../sections/competencies";
import Contact from "../sections/contact";
import Experiences from "../sections/experiences";
import Footer from "../sections/footer";
import Projects from "../sections/projects";
import Services from "../sections/services";

const IndexPage = () => {
  let ticking = false;
  const [scroll, setScroll] = React.useState({
    isScrollTop: false,
    lastScrollY: 0,
  });

  const handleScroll = () => {
    const { scrollY } = window;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const isScrollTop = scrollY > scroll.lastScrollY;
        setScroll({ isScrollTop, lastScrollY: scrollY });

        ticking = false;
      });

      ticking = true;
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <Header
        isScrollTop={scroll.isScrollTop}
        lastScrollY={scroll.lastScrollY}
      />
      <Banner />
      <main className="">
        <Services />
        <About />
        <Experiences />
        <Competencies />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Chat />
      <BottomNavigation lastScrollY={scroll.lastScrollY} />
    </>
  );
};

export default IndexPage;
