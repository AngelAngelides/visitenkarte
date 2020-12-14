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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AppConceptionONE GmbH`,
        short_name: `AppConceptionONE`,
        start_url: `/`,
        background_color: `#0f4c81`,
        theme_color: `#0f4c81`,
        display: `minimal-ui`,
        icon: `src/images/favicon-310.png`,
        icons: [
          {
            src: `/favicons/favicon-16.png`,
            sizes: `16x16`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-32.png`,
            sizes: `32x32`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-57.png`,
            sizes: `57x57`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-60.png`,
            sizes: `60x60`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-64.png`,
            sizes: `64x64`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-70.png`,
            sizes: `70x70`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-76.png`,
            sizes: `76x76`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-114.png`,
            sizes: `114x114`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-120.png`,
            sizes: `120x120`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-150.png`,
            sizes: `150x150`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-152.png`,
            sizes: `152x152`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-160.png`,
            sizes: `160x160`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-180.png`,
            sizes: `180x180`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/favicons/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: [
            'Spartan:n10,n7,n6,n4', 'Spartan Medium', 'Spartan Black',
          ],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
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
