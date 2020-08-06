import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

const PageTemplate = ({ data }) =>( 
    <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
)

export default PageTemplate

export const pageTemplateQuery = graphql`
query MarkdownPages($path: String!) {
    markdownRemark(frontmatter: {permalink: {eq: $path}}) {
      html
    }
  }
`
