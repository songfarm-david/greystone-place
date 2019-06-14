import React from 'react'
import { Link } from 'gatsby'

import GoogleMap from './google-map'
import Address from './address'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import '../styles/footer.scss'

import applicationform from "../downloads/Tenancy Application - Greystone Place.pdf"

const Footer = ({ siteTitle }) => (
	<div id="footer">
		<div id="footerInner">
			<article className="footer-module">
				<h3>Apply for Tenancy</h3>
				<p><a href={applicationform} download="Tenancy Application - Greystone Place" title="Download an application form to apply for tenancy">Download an application form&nbsp;<FontAwesomeIcon icon={faFilePdf} /></a></p>
			</article>
			<div id="siteLinks" className="footer-module">
				<h3>Site Navigation</h3>
				<ul>
					<li><Link to="/" title="Home">Home</Link></li>
					<li><Link to="/suites" title="Suites">Suites</Link></li>
					<li><Link to="/designer-upgrade-packages" title="Apartment Upgrade Packages">Feather Your Nest</Link></li>
					<li><Link to="/contact" title="Contact Management at Greystone Place">Inquire</Link></li>
				</ul>
			</div>
			<article className="google-maps-container footer-module">
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
