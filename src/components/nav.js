import React from 'react'
import { Link } from 'gatsby'
// import { withPrefix } from 'gatsby'

import navStyles from './nav.module.scss'

export default class Nav extends React.Component {

	constructor(props) {
		super(props)
		this.state = {drawerOpen: false}
		// this.toggleNav = this.toggleNav.bind(this)
	}

	toggleNav() {
		console.log('hello, world');
		this.setState(state => {
			// drawerOpen: !state.drawerOpen
		})
	}

	render() {
		return (
			<nav id={navStyles.nav}>
				<ul>
					<li><Link to="/apartments" title="Apartments">Apts.</Link></li>
					<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Upgrades</Link></li>
					<li><Link to="/contact" contact="Contact">Inquiries</Link></li>
				</ul>
				<button id={navStyles.mobMenu} onClick={this.toggleNav}>{this.drawerOpen ? 'Yes' : 'no'}</button>
			</nav>
		)
	}

}
