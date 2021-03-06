import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import fluidImage from '../utils/fluidImage'
import trackGoogle from '../functions/googleTracking.js'

import SEO from '../components/seo'
import Layout from '../components/layout'
import ImageBox from '../components/image-box'

import applicationform from "../downloads/Tenancy Application - Greystone Place.pdf"

import '../styles/layout.scss'

export default (props) => (
  <Layout>
    <SEO title="&#x201c;Feather Your Nest&#x201c;: Designer Upgrade Packages" keywords={[`suite upgrades`, `designer suites`, `feather your nest`]} description="Feather Your Nest with select designer upgrades."/>
    <section className="section">
      <h1>Feather Your Nest</h1>
      <p><span className="emphasized-text">&ldquo;Feather Your Nest&rdquo;</span> is a unique concept that enables Residents to personalize their Suites exclusively to their tastes and wishes. Create the living environment you've always wanted, limited only by your imagination.</p>
      <p>Quite simply, this principle is achieved by pro-rating the approved upgrade over its useful life. Greystone Place assists in the cost of your enrichment for mutual long term satisfaction.</p>
       <ImageBox carousel="true" align="left">
         <Img fluid={props.data.designOne.childImageSharp.fluid} />
         <Img fluid={props.data.designTwo.childImageSharp.fluid} />
         <Img fluid={props.data.designThree.childImageSharp.fluid} />
         <Img fluid={props.data.designFour.childImageSharp.fluid} />
         <Img fluid={props.data.designKitchen.childImageSharp.fluid} />
         <Img fluid={props.data.designKitchenTwo.childImageSharp.fluid} />
         <Img fluid={props.data.designBed.childImageSharp.fluid} />
         <Img fluid={props.data.designBath.childImageSharp.fluid} />
       </ImageBox>
       <hr />
       {/*<h2 className="screen-reader">Feather Your Nest</h2>*/}
       <p>Meticulously maintained and impressively detailed, Greystone Place offers a unique concept of <em>Designer Upgrade Packages</em>:</p>
       <div className="list">

         <h3>Designer Upgrade Packages may include:</h3>
          <ul className="list no-border">
             <li>Euro-style kitchen cabinets with upgraded fixtures and appliances</li>
             <li>Quality wall-to-wall broadloom enhanced by beautiful ceramic flooring</li>
             <li>Series 8000 doors with stylish hardware and richly detailed baseboard and trim moldings</li>
             <li>Muted paint color schemes, faux finishes and textures to highlight your furnishings</li>
             <li>Elegant light fixtures and custom window treatments</li>
          </ul>
       </div>
       <p>Rest easy, we have Professional Interior Decorators and Consultants available to make your dreams come true.</p>
       <blockquote className="clear">Personalize your new Apartment Home to create the environment of your dreams with this exclusive concept, appropriately named <b>"Feather Your Nest"</b>.</blockquote>
    </section>

   <section className="section reverse-layout">
      <h2 className="screen-reader">Inquire</h2>
      <p><a href={applicationform} download="Tenancy Application - Greystone Place" title="Download an application form to apply for tenancy" onClick={trackGoogle} data-type="Apply">Submit a Rental Application Form</a> or contact management today at <a href="tel:+19055742626" title="Call Greystone Place" onClick={trackGoogle} data-type="Call">905-574-2626</a>.</p>
      <Link to="/contact" className="cta" >Apply Now</Link>
   </section>

    {/* contact block here */}

  </Layout>
)

export const pageQuery = graphql`
   query {
      designOne: file(relativePath: { eq: "Image-11.jpg" }) {
         ...fluidImage
      }
      designTwo: file(relativePath: { eq: "Image-14.jpg" }) {
         ...fluidImage
      }
      designThree: file(relativePath: { eq: "Image-15.jpg" }) {
         ...fluidImage
      }
      designFour: file(relativePath: { eq: "Image-16.jpg" }) {
         ...fluidImage
      }
      designKitchen: file(relativePath: { eq: "Image-12.jpg" }) {
         ...fluidImage
      }
      designKitchenTwo: file(relativePath: { eq: "Image-13.jpg" }) {
         ...fluidImage
      }
      designBed: file(relativePath: { eq: "Image-18.jpg" }) {
         ...fluidImage
      }
      designBath: file(relativePath: { eq: "Image-17.jpg" }) {
         ...fluidImage
      }
   }
`
