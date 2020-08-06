/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/opendatahub",
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yaml_files`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown_posts`,
        path: `${__dirname}/src/markdown-pages/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown_pages`,
        path: `${__dirname}/src/pages/docs/`,
      },
    } 
  ], 
}
