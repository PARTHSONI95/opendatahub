import React from "react"
import { graphql } from 'gatsby'
import Header from '../components/header'
import Nav from "../components/navbar"
import '../styles/docs.scss'
import { Link } from 'gatsby'
/* function CheckChildren(props) {
    let children = props.children;
    if (children != null) {
      return (
        {children.map(({title}) =>(
            <div class="row">
                <h4 class="news-title">{title}</h4>
            </div>    
            ))
        }
      )
    }
    else{
      console.log('Null');  
    }
  } */

const DocsSidebar = ({ data }) =>(  
<div>
<head>   
        <script defer src="https://use.fontawesome.com/releases/v5.6.3/js/all.js" integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1" crossOrigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
        <script defer src="assets/js/main.js"></script>
        </head>
            <Header />
            <Nav />

    <div class="docs docs-container">
      <nav class="sidebar"> 
        {data.allDataYaml.nodes.map(({toc}) =>(
            <div>
                {toc.map(({title,children}) =>(
                    <div>
                        <h4 class="arch-nav-item active">{title}</h4>
                        {children? children.map(({title,url}) =>(
                            
                            <h5 class="arch-nav-sub-item active">
                            <a
                            href={url}>{title} 
                            </a></h5>
                    )): <h4></h4>   
                }                      
                    <hr />
                    </div>
                        
                    ))
                }
            <br />                                    
            </div>
        ))
        }
      </nav>  
      <main role="main" class="main-content">
        <div class="docs-article">
            <h1 class="page-title">Open Data Hub</h1>
            <div id="view">
              {{children}}
            </div>
        </div>
    </main>
    </div>
</div>
)    


export const query = graphql`
query MySideBarQuery {
    allDataYaml(filter: {toc: {elemMatch: {title: {ne: "null"}, children: {elemMatch: {children: {elemMatch: {title: {ne: "null"}}}, title: {ne: "null"}}}}}}) {
        nodes {
          toc {
            title
            url
            children {
              title
              url
            }
          }
        }
  }
}`

export default DocsSidebar