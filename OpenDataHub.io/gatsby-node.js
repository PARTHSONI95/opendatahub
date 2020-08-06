const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const { data } = await graphql(`
    query MarkdownPages {
        allMarkdownRemark {
          nodes {
            frontmatter {
                permalink
            }
            html
          }
        }
      }
    `);

    const pageTemplate = path.resolve(`src/templates/product.js`);

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({  
          path: node.frontmatter.permalink,
          component: pageTemplate,
          context: { permalink: node.frontmatter.permalink},
        })
      })
};