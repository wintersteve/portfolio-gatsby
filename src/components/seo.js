import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

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
