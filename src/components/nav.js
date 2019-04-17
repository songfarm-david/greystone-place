import React from 'react'
import { Link } from 'gatsby'
// import { withPrefix } from 'gatsby'

// import navStyles from './nav.module.scss'
import '../styles/nav.scss'

export default class Nav extends React.Component {

	constructor(props) {
		super(props)
		console.log(this.props);
		this.state = { isMenuOpen: this.props.menuOpen}
		// this.closeDrawer = this.closeDrawer.bind(this)
	}

	// closeDrawer() {
	// 	console.log('isMenuOpen?', this.state.isMenuOpen);
	// 	this.setState({
	// 		isMenuOpen: !this.state.isMenuOpen
	// 	}, () => this.props.menuOpen = this.state.isMenuOpen)
	//
	// 	console.log('this.props?', this.props);
	// }

	render() {
		return (
			<nav id="nav">
				<ul className={this.props.menuOpen ? "drawer-open" : "drawer-closed"}>
					{/*<li id="closeDrawer" onClick={this.closeDrawer}>X</li>*/}
					<li><Link to="/apartments" title="Apartments">Apts.</Link></li>
					<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Upgrades</Link></li>
					<li><Link to="/contact" contact="Contact">Inquiries</Link></li>
				</ul>
			</nav>
		)
	}

}
