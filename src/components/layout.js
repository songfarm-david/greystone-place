import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../styles/reset.css'
import '../styles/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description}/>
        <div className="main-container">
          {children}
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

export default Layout
