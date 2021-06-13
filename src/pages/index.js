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
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <>
      <SEO />
      <Header />
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
