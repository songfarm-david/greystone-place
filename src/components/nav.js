import React from 'react'
import { Link } from 'gatsby'

import navStyles from './nav.module.css'

const Nav = () => (
	<div className="nav">
		<ul>
			<li><Link to="/suites" title="Suites">Suites</Link></li>
			<li><Link to="/design-upgrade-packages" title="Design Upgrade Packages">Feather Your Nest</Link></li>
			<li><Link to="/location" title="Design Upgrade Packages">Location</Link></li>
			<li><Link to="/contact" contact="Contact">Contact</Link></li>
		</ul>
	</div>
)

export default Nav
