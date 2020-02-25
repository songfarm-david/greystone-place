import React from 'react'
import { Link } from 'gatsby'

import GoogleMap from './google-map'
import Address from './address'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import '../styles/footer.scss'

import trackGoogle from '../functions/googleTracking.js'
import applicationform from "../downloads/Tenancy Application - Greystone Place.pdf"

const Footer = ({ siteTitle }) => (
	<div id="footer">
		<div id="footerInner">
			<article className="footer-module">
				<h3>Apply for Rental</h3>
				<p>Call <a href="tel:+19055742626" title="Click to call" onClick={trackGoogle} data-type="Call" data-location="contact">905-574-2626</a> to set up a viewing.</p>
				<p><a href={applicationform} download="Rental Application - Greystone Place" title="Download an application form to apply for tenancy" onClick={trackGoogle} data-type="Apply" data-location="footer">Download a Rental Application&nbsp;<FontAwesomeIcon icon={faFilePdf} /></a></p>
			</article>
			<div id="siteLinks" className="footer-module">
				<h3>Site Navigation</h3>
				<ul>
					<li><Link to="/" title="Home">Home</Link></li>
					<li><Link to="/suites" title="Suites">Suites</Link></li>
					{/*<li><Link to="/designer-upgrade-packages" title="Apartment Upgrade Packages">Feather Your Nest</Link></li>*/}
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
			<p>Website by <a href="https://peakwebsites.ca" target="_blank" title="Peak Websites" style={{fontFamily: 'Arial'}}>Peak Websites</a></p>
		</div>
	</div>
)

export default Footer
