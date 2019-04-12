import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'
import Nav from './nav'

// TODO: Add social share icons to the header

const Header = ({ siteTitle, description }) => (
  <div id={headerStyles.header}>
    <p className={headerStyles.contactPhone}><a tel="905-574-2626" title="Call Greystone Place">905-574-2626</a></p>
    <div id={headerStyles.headerContainer}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <p name="description">{description}</p>
    </div>
    <Nav />
  </div>
)

export default Header
