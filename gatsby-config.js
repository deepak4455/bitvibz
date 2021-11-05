/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // pathPrefix: "/bitvibz",

  siteMetadata: {
    title: `Bitvibz`,
    description: `Motivational and success quotes`,
    titleTemplate: `%s | Bitvibz`,
    url: `https://bitvibz.netlify.app/`,
    image: `static/main.jpg`,
    twitterUsername: `@bitvibz`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [444, 590, 640, 736],
          backgroundColor: `transparent`,
        },
      },
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-T0P658R60X",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
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
