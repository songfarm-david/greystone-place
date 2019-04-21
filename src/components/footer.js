import React from 'react'
import { Link } from 'gatsby'
import GoogleMap from './google-map'

import footerStyles from './footer.module.scss'
// import { rhythm } from '../utils/typography'

const Footer = ({ siteTitle }) => (
	<div id={footerStyles.footer}>
		<div id={footerStyles.footerInner}>
			<div className={footerStyles.googleMapsContainer}>
				<h3>Location</h3>
				<GoogleMap />
			</div>
			<div id={footerStyles.siteLinks}>
				<h3>Site Links</h3>
				<ul>
					<li><Link to="/apartments" title="Apartments">Apartment Suites</Link></li>
					<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Designer Upgrades</Link></li>
					<li><Link to="/contact" contact="Contact">Inquiries</Link></li>
				</ul>
			</div>
		</div>
		<div id={footerStyles.legalFooter}>
			<p>© {new Date().getFullYear()}, {siteTitle}</p>
			<p>Website by <a href="https://peakwebsites.ca" target="_blank">Peak Websites</a></p>
		</div>
	</div>
)

export default Footer
