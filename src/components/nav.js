import React from 'react'
import { Link } from 'gatsby'

import '../styles/nav.scss'
// https://jonsuh.com/hamburgers/

export default class Nav extends React.Component {

	constructor(props) {
		super(props)
		this.state = { isMenuOpen: this.props.menuOpen}
	}

	render() {
		return (
			<nav id="nav" className="bullets">
				<ul className={this.props.menuOpen ? "drawer-open" : "drawer-closed"}>
					<li><Link to="/suites" title="Suites">Suites</Link></li><li><Link to="/apartment-upgrade-packages" title="Feather Your Nest">Feather Your Nest</Link></li><li><Link to="/contact" contact="Contact" title="Contact">Inquiries</Link></li>
				</ul>
			</nav>
		)
	}

}
