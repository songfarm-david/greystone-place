import React from 'react'
import { Link } from 'gatsby'

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
      <Link to="/suites" title="Suites">Suites</Link>
      <Link to="/design-upgrade-packages" title="Design Upgrade Packages">Feather Your Nest</Link>
      <Link to="/location" title="Design Upgrade Packages">Feather Your Nest</Link>
      <Link to="/contact" contact="Contact">Contact</Link>
    </div>
  </div>
)

export default Header
