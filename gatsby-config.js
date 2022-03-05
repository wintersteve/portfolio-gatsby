module.exports = {
  siteMetadata: {
    title: "Steve Winter | Full-Stack Web Developer",
    description:
      "Steve Winter - Full-Stack Software Engineer with a focus on modern JavaScript stacks and cloud envirnoments.",
    og: {
      description:
        "Steve Winter - Full-Stack Software Engineer with a focus on modern JavaScript stacks and cloud envirnoments.",
      title: "Steve Winter | Web Developer",
      type: "website",
      url: "https://wintersteve.com",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/avatar.svg",
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
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
        fonts: [`Poppins\:300,400,500,600,700,900`],
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-R5X8TY91W4"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};
