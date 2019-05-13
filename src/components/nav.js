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
			<nav id="nav">
				<ul className={this.props.menuOpen ? "drawer-open" : "drawer-closed"}>
					<li><Link to="/apartments" title="Apartments">Apts.</Link></li>
					<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Upgrades</Link></li>
					<li><Link to="/contact" contact="Contact" title="Contact">Inquiries</Link></li>
				</ul>
			</nav>
		)
	}

}
