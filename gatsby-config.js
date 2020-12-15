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
        icon: `${__dirname}/static/android-chrome-512x512.png`,
        // icons: [
        //   {
        //     src: `/favicons/favicon-16x16.png`,
        //     sizes: `16x16`,
        //     type: `image/png`,
            
        //   },
        //   {
        //     src: `/favicons/favicon-32x32.png`,
        //     sizes: `32x32`,
        //     type: `image/png`,
            
        //   },
        //   {
        //     rel: "mask-icon",
        //     src: `/favicons/safari-pinned-tab.svg`,
        //     sizes: `512x512`,
        //     type: `svg`,
            
        //   },
        //   {
        //     src: `/favicons/mstile-150x150.png`,
        //     sizes: `150x150`,
        //     type: `image/png`,
            
        //   },
        //   {
        //     src: `/favicons/favicon-152.png`,
        //     sizes: `152x152`,
        //     type: `image/png`,
            
        //   },
        //   {
        //     src: `/favicons/apple-touch-icon.png`,
        //     sizes: `180x180`,
        //     type: `image/png`,
        //     purpose: `maskable`,
        //   },
        //   {
        //     src: `/favicons/android-chrome-192x192.png.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
            
        //   },
        //   {
        //     src: `/favicons/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
            
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: [
            'Spartan:n10,n7,n6,n4', 'Spartan Medium:n5', 'Spartan Black',
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
