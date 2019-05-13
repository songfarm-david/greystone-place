module.exports = {
  siteMetadata: {
    title: `Greystone Place`,
    titleTemplate: '%s - Gracious Apartment Living',
    description: `Setting new standards in gracious apartment living`,
    url: 'https://greystoneplace.ca',
    author: `@peakwebsite`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        name: `Greystone Place`,
        short_name: `Greystone Place`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Image-38.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cinzel`,
            variants: ['400','800']
          },
          {
             family: 'Quicksand',
             variants: ['300', '400', '400i']
          }
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
