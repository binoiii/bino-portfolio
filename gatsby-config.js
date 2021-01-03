module.exports = {
  siteMetadata: {
    title: `Bino Portfolio`,
    description: `Website which showcases my projects and profile.`,
    author: `@binothird`,
    url: `https://bino-third.netlify.app`,
    image: `/images/albin-logo.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bino-portfolio`,
        short_name: `bino`,
        start_url: `/`,
        background_color: `#67b4fc`,
        theme_color: `#67b4fc`,
        display: `minimal-ui`,
        icon: `src/images/albin-logo.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
