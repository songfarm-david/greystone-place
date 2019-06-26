// Layout component
// @includes Header, Footer components

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// Components
import Header from './header'
import Footer from './footer'
import Modal from './modal'

// Styles
// import '../styles/layout.scss'

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
        <div id="scrim"></div>
        <Modal />
        <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description}/>
        <main role="main" id="main-container">
          {children}
        </main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

export default Layout
