import React from 'react'
import { Link } from 'gatsby'
// import { withPrefix } from 'gatsby'

import navStyles from './nav.module.scss'

<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
const Nav = (props) => (
	<nav id="nav" className="underlined">
		<ul className={props.menuOpen ? "drawer-open" : "drawer-closed"}>
			<li><Link to="/suites" title="Suites">Suites</Link></li><li><Link to="/designer-upgrade-packages" title="Feather Your Nest">Feather Your Nest</Link></li><li><Link to="/contact" contact="Contact" title="Contact">Inquire</Link></li>
		</ul>
	</nav>
)

export default Nav
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
