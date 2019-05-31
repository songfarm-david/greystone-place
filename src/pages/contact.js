import React from 'react'
// import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Address from '../components/address'
import GoogleMap from '../components/google-map'

export default () => (
  <Layout>
    <SEO title="Contact" description="Contact management to apply for tenancy or for any questions you have about suite rentals."/>
    <section className="section">
       <h1>Contact</h1>
   	 <p>If interested in renting, please complete an <a href="#" title="Apply for Rental">Application Form</a>.</p>
       <p>For inquiries, please contact Management at <a href="tel:+19055742626" title="Click to call">905-574-2626</a>.</p>
       <div className="google-maps-container">
         <Address />
         <GoogleMap id="contactMap" />
       </div>
    </section>

  </Layout>
)
