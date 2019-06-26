import React from 'react'
// import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Address from '../components/address'
import GoogleMap from '../components/google-map'
import ContactForm from '../components/contact-form.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import applicationform from "../downloads/Tenancy Application - Greystone Place.pdf"

export default () => (
  <Layout>
    <SEO title="Contact" description="Contact management to apply for tenancy or for any questions you have about suite rentals."/>
    <section className="section">
       <h1>Contact</h1>
   	 <p>If interested in renting, please send a completed <a href={applicationform} download="Tenancy Application - Greystone Place" title="Download an application form to apply for tenancy">Rental Application Form&nbsp;<FontAwesomeIcon icon={faFilePdf} /></a> to <a href="mailto:apply@greystoneplace.ca">apply@greystoneplace.ca</a>.</p>
       <p>For all other inquiries, please call <a href="tel:+19055742626" title="Click to call">905-574-2626</a> or use the contact form below.</p>
       <ContactForm />
       <div className="google-maps-container left">
         <Address />
         <GoogleMap id="contactMap"/>
       </div>
    </section>

  </Layout>
)
