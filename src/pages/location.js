// NOTE: This page isn't in use

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import GoogleMap from '../components/google-map'

export default () => (
  <Layout>
    {/*<SEO title="Page two" />*/}
    <h1>Location</h1>
    <p>Greystone Place is a fully restored Apartment building at 512 Mohawk Road East, centrally located on the Hamilton Mountain.</p>
    <GoogleMap align="left"/>
	 <ul>
	 	<li>Close proximity to churches, hospitals, and shopping</li>
		<li>Located in the same block as the Limeridge Mall</li>
		<li>Public transit only steps away</li>
		<li>Lincoln Alexander Parkway (“Linc”) providing highway access to the Toronto corridor and Golden Horseshoe</li>
		<li>GO train is available within minutes at the downtown terminal</li>
	 </ul>
	 {/* NOTE: link out to appropriate resources, i.e: Limeridge, Link, GO */}
	 <p><em>Throw in Contact block/component here.</em></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
