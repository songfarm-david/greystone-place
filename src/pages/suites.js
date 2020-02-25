import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import trackGoogle from '../functions/googleTracking.js'

// eslint-disable-next-line
import fluidImage from '../utils/fluidImage'
import SEO from '../components/seo'
import Layout from '../components/layout'
import ImageBox from '../components/image-box'

import applicationform from "../downloads/Tenancy Application - Greystone Place.pdf"

export default (props) => (
  <Layout>
    <SEO title="Suites" description="Offering 1 and 2-Bedroom suites" keywords={['suite rentals', '1 bedroom', '2 bedroom']}/>
    <section className="section">
       <h1>Suites at Greystone Place</h1>
       <p>Clean, bright, spacious 1 and 2 bedroom suites are finished in our “designer” color schemes and have generous closet space. All suites include large balconies - some with panoramic views of the Toronto skyline and the Escarpment.</p>
       <p>Parking for 1 vehicle is included as is heat and hot water. The resident manager lives on site and the clean, modern laundry facility is well equipped with new Maytag washers and dryers.</p>
       <p class="disclaimer"><i>Below is a typical suite. Not all suites may appear as shown depending on availablity.</i></p>
       <ImageBox align="right" carousel="true">
        <Img fluid={props.data.suiteThree.childImageSharp.fluid} />
        <Img fluid={props.data.suiteOne.childImageSharp.fluid} />
        <Img fluid={props.data.suiteTwo.childImageSharp.fluid} />
        <Img fluid={props.data.suiteKitchenTwo.childImageSharp.fluid} />
        <Img fluid={props.data.suiteKitchen.childImageSharp.fluid} />
        <Img fluid={props.data.suiteKitchenThree.childImageSharp.fluid} />
        <Img fluid={props.data.bedroomOne.childImageSharp.fluid} />
        <Img fluid={props.data.bedroomTwo.childImageSharp.fluid} />
        <Img fluid={props.data.bathroomOne.childImageSharp.fluid} />
        <Img fluid={props.data.laundryOne.childImageSharp.fluid} title="Greystone Place Laundry Room"/>
        <Img fluid={props.data.skyline.childImageSharp.fluid} />
       </ImageBox>
       <p><i>Jr. 1-Bedroom starting @ $995. Includes heat, water, and one parking spot. Hydro and cable/WIFI extra. Suites are unfurnished. Sorry, no dogs allowed.</i></p>
       <div className="list floating-list left">
        <h3>Apartment Suites Include:</h3>
         <ul>
           <li>Fridge/Stove</li>
           <li>Parking</li>
           <li>Balcony/Deck</li>
           <li>Laundry</li>
         </ul>
       </div>
       <p>Greystone Place issues high-security keys and controlled access is video monitored. The lobby entrance monitor can be viewed through your TV.</p>
       <p>This excellent mountain location is within close proximity to churches, hospitals, and shopping. Located in the same block as Limeridge Mall, and just steps to public transit. Also, only a short ride to the GO Train and the Lincoln Alexander Expressway.</p>

       <blockquote className="clear">Enhancing your quality of life in this tranquil, worry-free setting is an unprecedented, limited opportunity.</blockquote>
    </section>

    <section className="section reverse-layout">
       <h2 className="screen-reader">Inquire</h2>
       <p>Viewing or further inquiries may be directed to courteous onsite staff at <a href="tel:+19055742626" title="Call Greystone Place" onClick={trackGoogle} data-type="Call">(905) 574-2626</a> or <a href={applicationform} download="Rental Application - Greystone Place" title="Download an application form to apply for tenancy" onClick={trackGoogle} data-type="Apply">submit a rental application</a>.</p>
       <Link to="/contact" className="cta" >Apply Now</Link>
    </section>

  </Layout>
)

export const pageQuery = graphql`
   query {
      suiteOne: file(relativePath: { eq: "Image-19.jpg" }) {
         ...fluidImage
      }
      suiteTwo: file(relativePath: { eq: "Image-20.jpg" }) {
         ...fluidImage
      }
      suiteKitchen: file(relativePath: { eq: "Image-21.jpg" }) {
         ...fluidImage
      }
      suiteKitchenTwo: file(relativePath: { eq: "Image-22.jpg" }) {
         ...fluidImage
      }
      suiteKitchenThree: file(relativePath: { eq: "Image-23.jpg" }) {
         ...fluidImage
      }
      suiteThree: file(relativePath: { eq: "Image-24.jpg" }) {
         ...fluidImage
      }
      bedroomOne: file(relativePath: { eq: "Image-25.jpg" }) {
         ...fluidImage
      }
      bedroomTwo: file(relativePath: { eq: "Image-26.jpg" }) {
         ...fluidImage
      }
      bathroomOne: file(relativePath: { eq: "Image-27.jpg" }) {
         ...fluidImage
      }
      laundryOne: file(relativePath: { eq: "Image-28.jpg" }) {
         ...fluidImage
      }
      skyline: file(relativePath: { eq: "hamilton_skyline.jpg"}) {
         ...fluidImage
      }
   }
`
