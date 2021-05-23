import * as React from "react";
import Banner from "../sections/banner";
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
  let lastScrollY = 0;

  const [scroll, setScroll] = React.useState({
    isScrollTop: false,
    lastScrollY: 0,
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrollTop = scrollY > lastScrollY;
          setScroll({ isScrollTop, lastScrollY: scrollY });

          lastScrollY = scrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        isScrollTop={scroll.isScrollTop}
        lastScrollY={scroll.lastScrollY}
      />
      <Banner />
      <main>
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
    </>
  );
};

export default IndexPage;
