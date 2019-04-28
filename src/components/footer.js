import React from 'react'
import { Link } from 'gatsby'

import GoogleMap from './google-map'
import Address from './address'

import '../styles/footer.scss'

const Footer = ({ siteTitle }) => (
	<div id="footer">
		<div id="footerInner">
			<article className="download">
				<h3>Apply</h3>
				<p>Submit an <a href="#" title="Download an application form to apply for tenancy">application form</a></p>
			</article>

			<div id="siteLinks">
				<h3>Site Links</h3>
				<ul>
					<li><Link to="/apartments" title="Apartments">Apartment Suites</Link></li>
					<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Designer Upgrades</Link></li>
					<li><Link to="/contact" contact="Contact">Inquiries</Link></li>
				</ul>
			</div>

			<article className="google-maps-container">
				<h3>Location</h3>
				<Address />
				<GoogleMap />
			</article>

		</div>
		<div id="legalFooter">
			<p>© {new Date().getFullYear()}, {siteTitle}</p>
			<p>Website by <a href="https://peakwebsites.ca" target="_blank">Peak Websites</a></p>
		</div>
	</div>
)

export default Footer
