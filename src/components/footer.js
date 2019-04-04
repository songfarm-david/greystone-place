import React from 'react'
import { Link } from 'gatsby'
import GoogleMap from './google-map'

const Footer = ({ siteTitle }) => (
	<div>
		<GoogleMap />
		<div className="site-links">
			<h3>Site Links</h3>
			<ul>
				<li><Link to="/suites" title="Suites">Suites</Link></li>
				<li><Link to="/design-upgrade-packages" title="Design Upgrade Packages">Designer Upgrade Packages</Link></li>
				<li><Link to="/location" title="Design Upgrade Packages">Location</Link></li>
				<li><Link to="/contact" contact="Contact">Contact</Link></li>
			</ul>
		</div>
		<div className="legal-footer">
			<p>© {new Date().getFullYear()}, {siteTitle}</p>
			<p>Website by <a href="https://peakwebsites.ca" target="_blank">Peak Websites</a></p>
		</div>
	</div>
)

export default Footer
