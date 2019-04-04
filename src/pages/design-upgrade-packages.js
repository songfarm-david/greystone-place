import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import '../styles/layout.css'

export default () => (
  <Layout>
    {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />*/}
    <h1>Designer Upgrade Packages - Feather Your Nest</h1>
	 <p>Meticulously maintained and impressively detailed, Greystone Place offers a unique concept of Designer Upgrade Packages</p>
    <p>&ldquo;Feather Your Nest&rdquo; is a unique concept that enables Residents to personalize their Suites exclusively to their tastes and wishes. Create the living environment you've always wanted, limited only by your imagination. Enhancing your quality of life in this tranquil, worry-free setting is an unprecedented, limited opportunity.</p>
	 <p>Quite simply, this principle is achieved by pro-rating the approved upgrade over its useful life. Greystone Place assists in the cost of your enrichment for mutual long term satisfaction. Some of the “Designer Upgrade Packages” include:</p>
	 <ul>
	 	<li>Euro-style kitchen cabinets with upgraded fixtures and appliances</li>
		<li>Quality wall-to-wall broadloom enhanced by beautiful ceramic flooring</li>
		<li>Series 8000 doors with stylish hardware and richly detailed baseboard and trim moldings</li>
		<li>Muted paint color schemes, faux finishes and textures to highlight your furnishings</li>
		<li>Elegant light fixtures and custom window treatments</li>
	 </ul>
	 <p>Rest easy, we have Professional Interior Decorators and Consultants available to make your dreams come true.</p>
    {/*<Img className="img-float-right" fluid={props.data.lobby.childImageSharp.fluid} />*/}


  </Layout>
)
