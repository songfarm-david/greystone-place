import React from 'react'
import { Link } from 'gatsby'
// import { withPrefix } from 'gatsby'

import navStyles from './nav.module.scss'

export default class Nav extends React.Component {

	constructor(props) {
		super(props)
		this.state = {drawerOpen: true}
		this.toggleNav = this.toggleNav.bind(this)
	}

	toggleNav() {
		this.setState(state => ({
			drawerOpen: !state.drawerOpen
		}))
		console.log(this.state.drawerOpen);
	}

	render() {
		return (
			<nav id={navStyles.nav}>
				<ul className={this.state.drawerOpen ? "drawer-open" : ""}>
					<li><Link to="/apartments" title="Apartments">Apts.</Link></li>
					<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Upgrades</Link></li>
					<li><Link to="/contact" contact="Contact">Inquiries</Link></li>
				</ul>
				<button id={navStyles.mobMenu} onClick={this.toggleNav}>X</button>
			</nav>
		)
	}

}
