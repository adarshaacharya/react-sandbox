/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "Aadarsha Acharya",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve : 'gatsby-transformer-remark',
      options : {
        plugins : [
          'gatsby-remark-relative-images' ,
          {
            resolve : 'gatsby-remark-images',
            options : {
              maxWidth : 750,
              linkImageToOriginal : false
            }
          }
        ]
      }
    }
  ],
}
