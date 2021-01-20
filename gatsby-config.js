module.exports = {
  siteMetadata: {
    title: `AppConceptionOne GmbH`,
    description: `der App-Entwicklungsagentur für die Konzeption, Gestaltung, Programmierung, und Vermarktung von IT-basierten Anwendungen.`,
    author: `Marc Moughrabi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AppConceptionONE GmbH`,
        short_name: `AppConceptionONE`,
        start_url: `/`,
        background_color: `#0f4c81`,
        theme_color: `#0f4c81`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/android-chrome-512x512.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-web-font-loader`,
    //   options: {
    //     custom: {
    //       families: [
    //         'Spartan:n10,n7,n6,n4', 'Spartan Medium:n5', 'Spartan Black',
    //       ],
    //       urls: ["/fonts/fonts.css"],
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
