import React from 'react'
// import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Address from '../components/address'
import GoogleMap from '../components/google-map'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import applicationform from "../downloads/Tenancy Application - Greystone Place.pdf"

export default () => (
  <Layout>
    <SEO title="Contact" description="Contact management to apply for tenancy or for any questions you have about suite rentals."/>
    <section className="section">
       <h1>Contact</h1>
   	 <p>If interested in renting, please <a href={applicationform} download="Tenancy Application - Greystone Place" title="Download an application form to apply for tenancy">download an application form&nbsp;<FontAwesomeIcon icon={faFilePdf} /></a>. Please attach and email completed application forms to ...</p>
       <p>For all other inquiries, please use the contact form or contact Management by phone at <a href="tel:+19055742626" title="Click to call">905-574-2626</a>.</p>
       <div className="google-maps-container">
         <Address />
         <GoogleMap id="contactMap" />
       </div>
    </section>

  </Layout>
)
