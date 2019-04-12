import React from 'react'
import { Link } from 'gatsby'
import GoogleMap from './google-map'

import footerStyles from './footer.module.scss'
import { rhythm } from '../utils/typography'

const Footer = ({ siteTitle }) => (
	<div className={footerStyles.footerContainer} style={{ padding: rhythm(1) }}>
		<div className={footerStyles.googleMapsContainer}>
			<h3>Location</h3>
			<GoogleMap align="right"/>
		</div>
		<div className={footerStyles.siteLinks}>
			<h3>Site Links</h3>
			<ul>
				<li><Link to="/suites" title="Suites">Suites</Link></li>
				<li><Link to="/design-upgrade-packages" title="Design Upgrade Packages">Designer Upgrade Packages</Link></li>
				<li><Link to="/location" title="Design Upgrade Packages">Location</Link></li>
				<li><Link to="/contact" contact="Contact">Contact</Link></li>
			</ul>
		</div>
		<div className={footerStyles.legalFooter}>
			<p>© {new Date().getFullYear()}, {siteTitle}</p>
			<p>Website by <a href="https://peakwebsites.ca" target="_blank">Peak Websites</a></p>
		</div>
	</div>
)

export default Footer
