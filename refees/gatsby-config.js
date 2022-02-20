module.exports = {
  siteMetadata: {
    title: `ReFees`,
    description: `a subscription-based model to hedge Gas
        Fees on the Ethereum Blockchain`,
    author: `refees`,
    baseUrl: `https://refees.org`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "XXXXX",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ReFees Finance`,
        short_name: `ReFees`,
        start_url: `/`,
        background_color: `#1E1D34`,
        theme_color: `#1E1D34`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
