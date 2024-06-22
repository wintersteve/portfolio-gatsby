import React from "react";
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
import Seo from "../components/seo";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Seo />
      <Header />
      <Banner />
      <main>
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
