import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'


const news = ({ data }) =>
<Layout>
<main role="main" class="main news">
    <div class="container main-content">
    <h1 class="page-title">NEWS</h1>
        {data.allMarkdownRemark.edges.map(({node}) =>(
            <div class="row">
                <div class="news-section col-lg-8">
                    <h3 class="news-title">{node.frontmatter.title}</h3>
                    <h5 class="news-date">{node.frontmatter.date}</h5>
                    <p class="news-content">
                    {node.frontmatter.preview}
                    </p>
                </div>
                <div class="next-link">
                    <a class="btn btn-light" href={node.frontmatter.permalink}> Read <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
        ))
        }
    </div>
</main>
</Layout>
    


export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {permalink: {regex: "/news/i"}}}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            preview
            permalink
          }
        }
      }
    }
  }`

export default news