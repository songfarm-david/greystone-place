// Layout component
// @includes Header, Footer components
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// Components
import Header from './header'
import Footer from './footer'
// Styles
import '../styles/layout.scss'
import '../styles/reset.css'

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
        <div id="main-container">
          {children}
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

export default Layout
