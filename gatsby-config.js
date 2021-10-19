/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // pathPrefix: "/bitvibz",

  siteMetadata: {
    title: `Bitvibzs`,
    description: `Motivational and success quotes`,
    titleTemplate: `%s | Bitvibz`,
    url: `https://bitvibz.netlify.app/`,
    image: `static/main.jpg`,
    twitterUsername: `@bitvibz`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Bitvibz`,
    //     short_name: `Bitvibz`,
    //     // start_url: `/`,
    //     scope: `/`,
    //     background_color: `#f7f0eb`,
    //     description: `The application does cool things and makes your life better.`,
    //     categories: [`blog`, `quotes`],
    //     theme_color: `#a2466c`,
    //     display: `standalone`,
    //     // prefer_related_applications: `true`,
    //     icon: `src/assets/images/sample-logo.png`,
    //     // cache_busting_mode: `none`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/about/`],
    //     // workboxConfig: {
    //     //   globPatterns: ["**/icon-path*"],
    //     // },
    //   },
    // },
  ],
}
