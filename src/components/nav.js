import React from 'react'
import { Link } from 'gatsby'

const Nav = (props) => (
	<nav id="nav" className="underlined">
		<ul className={props.menuOpen ? "drawer-open" : "drawer-closed"}>
			<li><Link to="/suites" title="Suites">Suites</Link></li><li><Link to="/designer-upgrade-packages" title="Feather Your Nest">Feather Your Nest</Link></li><li><Link to="/contact" contact="Contact" title="Contact">Inquire</Link></li>
		</ul>
	</nav>
)

export default Nav
