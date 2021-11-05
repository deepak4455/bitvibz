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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-T0P658R60X", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          // cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
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
