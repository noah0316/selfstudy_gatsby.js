module.exports = {
  siteMetadata: {
    title: "My Blog",
    author: "Noah",
    description: "A collection of my thoughts and writings.",
    siteUrl: "https://Noah.blog/",
    social: [
      {
        name: "instagram",
        url: "https://www.instagram.com/happyhong_2/",
      },
      {
        name: "github",
        url: "https://github.com/noah0316",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-theme-blog",
      options: {},
    },
  ],
}
