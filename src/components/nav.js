import React from 'react'
import { Link } from 'gatsby'

import '../styles/nav.scss'
// https://jonsuh.com/hamburgers/

const Nav = (props) => (
	<nav id="nav" className="underlined">
		<ul className={props.menuOpen ? "drawer-open" : "drawer-closed"}>
			{props.menuOpen ? <li><Link to="/" title="Home">Home</Link></li> : null}
			<li><Link to="/suites" title="Suites">Suites</Link></li><li><Link to="/designer-upgrade-packages" title="Feather Your Nest">Feather Your Nest</Link></li><li><Link to="/contact" contact="Contact" title="Contact">Inquire</Link></li>
		</ul>
	</nav>
)

export default Nav
