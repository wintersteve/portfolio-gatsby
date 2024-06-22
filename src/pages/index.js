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
import competencies from "../data/competencies.json";

export const Head = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Steve Winter",
    jobTitle: "Software Engineer",
    url: "https://wintersteve.com",
    image: "https://wintersteve.com/images/profile.jpeg",
    sameAs: [
      "https://www.linkedin.com/in/steve-winter/",
      "https://github.com/wintersteve",
      "https://www.facebook.com/steve.winter.9659",
    ],
    email: "mailto:contact@wintersteve.com",
    description:
      "Seasoned software engineer with 5+ years of experience in full-stack development, cloud architecture, cybersecurity, and system administration. Proven track record of delivering innovative solutions for SMEs and enterprises.",
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Software Architecture",
      "Cloud Computing",
      "Cybersecurity",
      ...competencies.flatMap(({ categories }) =>
        categories.flatMap(({ skills }) => skills.map(({ title }) => title))
      ),
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
};

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
