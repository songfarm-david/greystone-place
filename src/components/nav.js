import React from 'react'
import { Link } from 'gatsby'
import { withPrefix } from 'gatsby'

import toggleNav from '../navigation.js'

import navStyles from './nav.module.scss'

export default class Nav extends React.Component {

	componentDidMount() {
		let navToggle = document.querySelector("[name='mobileNavTrigger']")
		navToggle.addEventListener('click', function(){
			alert('Cheers')
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
				<a href="javascript:void(0)" id={navStyles.mobMenu} name="mobileNavTrigger">X</a>
			</nav>
		)
	}

}


// export default Nav
