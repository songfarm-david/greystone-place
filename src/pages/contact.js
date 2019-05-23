import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Address from '../components/address'
import GoogleMap from '../components/google-map'

export default () => (
  <Layout>
    {/*<SEO title="Page two" />*/}
    <section className="section">
       <h2>Contact</h2>
   	 <p className="">If you're interested in renting, please complete an <a href="#">Application Form</a> or Call Kim at <a href="tel:+19055742626">905-574-2626</a>.</p>
       <div className="google-maps-container">
         <Address />
         <GoogleMap />
       </div>
    </section>

  </Layout>
)
