module.exports = {
  siteMetadata: {
    title: "Steve Winter | Full-Stack Web Developer",
    description:
      "Steve Winter. Professional Full-Stack Web Developer. Focus on the JavaScript environment. Familiarity with all major modern technologies and stacks.",
    og: {
      description:
        "Wondering where and how to find a good web developer? Looking for fast, performant web applications, web sites or cms work? Contact me",
      title: "Steve Winter | Web Developer",
      type: "website",
      url: "https://wintersteve.com",
    },
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,600,700,900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "menu",
        id: "menu",
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "chat",
        id: "chat",
      },
    },
  ],
};
