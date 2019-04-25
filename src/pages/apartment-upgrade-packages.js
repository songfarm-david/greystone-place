import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import fluidImage from './index'
import Layout from '../components/layout'
import ImageBox from '../components/image-box'

import '../styles/layout.scss'

export default (props) => (
  <Layout>
    {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />*/}
    <div className="section">
      <h2>Designer Upgrade Packages</h2>
      <p>Meticulously maintained and impressively detailed, Greystone Place offers a unique concept of <em><strong>Designer Upgrade Packages</strong></em>:</p>
       <ImageBox carousel="true" align="left" style={{width: '66%'}}>
         <Img fluid={props.data.designOne.childImageSharp.fluid} />
         <Img fluid={props.data.designTwo.childImageSharp.fluid} />
         <Img fluid={props.data.designThree.childImageSharp.fluid} />
         <Img fluid={props.data.designFour.childImageSharp.fluid} />
       </ImageBox>
       <h3>Feather Your Nest</h3>
       <p>&ldquo;Feather Your Nest&rdquo; is a unique concept that enables Residents to personalize their Suites exclusively to their tastes and wishes. Create the living environment you've always wanted, limited only by your imagination.</p>
       <p>Quite simply, this principle is achieved by pro-rating the approved upgrade over its useful life. Greystone Place assists in the cost of your enrichment for mutual long term satisfaction.</p>
       <p>Rest easy, we have Professional Interior Decorators and Consultants available to make your dreams come true.</p>
    </div>

   <div className="section">
      <hr />

      <h4>Designer Upgrade Packages include:</h4>
      <ul className="floating-list">
         <li>Euro-style kitchen cabinets with upgraded fixtures and appliances</li>
         <li>Quality wall-to-wall broadloom enhanced by beautiful ceramic flooring</li>
         <li>Series 8000 doors with stylish hardware and richly detailed baseboard and trim moldings</li>
         <li>Muted paint color schemes, faux finishes and textures to highlight your furnishings</li>
         <li>Elegant light fixtures and custom window treatments</li>
      </ul>
      {/*<ImageBox>*/}
         <Img fluid={props.data.designKitchen.childImageSharp.fluid} />
         <Img fluid={props.data.designKitchenTwo.childImageSharp.fluid} />
         <Img fluid={props.data.designBed.childImageSharp.fluid} />
         <Img fluid={props.data.designBath.childImageSharp.fluid} />
      {/*</ImageBox>*/}
      <blockquote className="clear">Enhancing your quality of life in this tranquil, worry-free setting is an unprecedented, limited opportunity.</blockquote>
      <p><a href="tel:+19055742626" title="Call Kim at Greystone Place">Call Kim today</a></p>
   </div>

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
