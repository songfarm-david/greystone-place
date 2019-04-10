import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'
import Nav from './nav'

// TODO: Add social share icons to the header

const Header = ({ siteTitle, description }) => (
  <div id={headerStyles.header}>
    <div id={headerStyles.headerContainer}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <p>{description}</p>
    </div>
    <Nav />
  </div>
)

export default Header
