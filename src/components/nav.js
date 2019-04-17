import React from 'react'
import { Link } from 'gatsby'
// import { withPrefix } from 'gatsby'

// import navStyles from './nav.module.scss'
import '../styles/nav.scss'

export default class Nav extends React.Component {

	constructor(props) {
		super(props)
		console.log(this.props);
		// this.toggleNav = this.toggleNav.bind(this)
	}

	render() {
		return (
			<nav id="nav">
				<ul className={this.props.menuOpen ? "drawer-open" : ""}>
					<li id="closeDrawer">X</li>
					<li><Link to="/apartments" title="Apartments">Apts.</Link></li>
					<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Upgrades</Link></li>
					<li><Link to="/contact" contact="Contact">Inquiries</Link></li>
				</ul>
			</nav>
		)
	}

}
