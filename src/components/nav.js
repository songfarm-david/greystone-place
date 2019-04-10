import React from 'react'
import { Link } from 'gatsby'

import navStyles from './nav.module.scss'

const Nav = () => (
	<nav id={navStyles.nav}>
		<ul>
			<li><Link to="/apartments" title="Apartments">Apts.</Link></li>
			<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Upgrades</Link></li>
			<li><Link to="/contact" contact="Contact">Inquiries</Link></li>
		</ul>
	</nav>
)

export default Nav
