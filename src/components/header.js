import React from 'react'
import { Link } from 'gatsby'

import Nav from './nav'

// TODO: Add social share icons to the header

const Header = ({ siteTitle, description }) => (
  <div>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <p>{description}</p>
      <Nav />
    </div>
  </div>
)

export default Header
