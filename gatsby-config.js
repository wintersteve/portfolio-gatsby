module.exports = {
  siteMetadata: {
    title: "Software Engineer | Full-Stack | Cloud Expert",
    description:
      "Seasoned software engineer with 5+ years of experience in full-stack development, cloud architecture, cybersecurity, and system administration. Proven track record of delivering innovative solutions for SMEs and enterprises.",
    og: {
      description:
        "Seasoned software engineer with 5+ years of experience in full-stack development, cloud architecture, cybersecurity, and system administration. Proven track record of delivering innovative solutions for SMEs and enterprises.",
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
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
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
