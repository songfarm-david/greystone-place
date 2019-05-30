import React from 'react'
import { Link } from 'gatsby'

import GoogleMap from './google-map'
import Address from './address'

import '../styles/footer.scss'

const Footer = ({ siteTitle }) => (
	<div id="footer">
		<div id="footerInner">
			<article className="footer-module">
				<h3>Apply for Tenancy</h3>
				<p>Submit an <a href="#" title="Download an application form to apply for tenancy">application form</a></p>
			</article>
			<div id="siteLinks" className="footer-module">
				<h3>Site Navigation</h3>
				<ul>
					<li><Link to="/" title="Home">Home</Link></li>
					<li><Link to="/suites" title="Suites">Suites</Link></li>
					<li><Link to="/apartment-upgrade-packages" title="Apartment Upgrade Packages">Designer Upgrades</Link></li>
					<li><Link to="/contact" title="Contact">Inquiries</Link></li>
				</ul>
			</div>
			<article className="google-maps-container footer-module">
				<h3>Location</h3>
				<Address />
				<GoogleMap id="footerMap"/>
			</article>

		</div>
		<div id="legalFooter">
			<p>© {new Date().getFullYear()}, {siteTitle}</p>
			<p>Website by <a href="https://peakwebsites.ca" target="_blank" title="Peak Websites">Peak Websites</a></p>
		</div>
	</div>
)

export default Footer
