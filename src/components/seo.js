import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import competencies from "../data/competencies.json";

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

const Seo = () => {
  const { site } = useStaticQuery(query);

  const { title, description, og } = site.siteMetadata;

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />

      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={og.url} />
      <meta property="og:type" content={og.type} />
      <meta property="og:title" content={og.title} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        title
        description
        og {
          description
          title
          url
          type
        }
      }
    }
  }
`;

export default Seo;
