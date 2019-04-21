import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import ImageBox from '../components/image-box'
import fluidImage from './index'

export default (props) => (
  <Layout>
    {/*<SEO title="Page two" />*/}
    <h1>Apartments at Greystone Place</h1>
    <ImageBox align="right" carousel="true">
      <Img fluid={props.data.suiteThree.childImageSharp.fluid} />
      <Img fluid={props.data.suiteOne.childImageSharp.fluid} />
      <Img fluid={props.data.suiteTwo.childImageSharp.fluid} />
      <Img fluid={props.data.suiteKitchenTwo.childImageSharp.fluid} />
      <Img fluid={props.data.suiteKitchen.childImageSharp.fluid} />
      <Img fluid={props.data.suiteKitchenThree.childImageSharp.fluid} />
    </ImageBox>
    <p>Greystone Place by Limeridge mall is a prestigious, upscale address offering safety, security and quiet enjoyment. Meticulously maintained and ideal for mature adults. Sorry, no dogs allowed.</p>
    <p>This excellent mountain location is within close proximity to churches, hospitals, and shopping. Located in the same block as Limeridge Mall, and just steps to public transit. Also, only a short ride to the GO Train and the Lincoln Alexander Expressway.</p>
    <p>Lush landscaping and natural settings grace the exterior while soft, soothing music emanates throughout the lobby and hallways. Clean, bright, spacious 1 bedroom suites are finished in our “designer” color schemes and have generous closet space. All suites include large balconies - some with panoramic views of the Toronto skyline and the Escarpment. Parking for 1 vehicle is included as is heat and hot water. The resident manager lives on site and the clean, modern laundry facility is well equipped with new Maytag washers and dryers.</p>
    <p>Greystone Place issues high-security keys and controlled access is video monitored. The lobby entrance monitor can be viewed through your TV. The leisure room is a shared social facility with bingo, bridge, and movie night. Equipped with an efficient kitchen, this unique facility can be reserved for family functions or small private parties.</p>
    <p>Viewing or further inquiries may be directed to courteous onsite staff at (905) 574-2626.</p>
    <ImageBox align="left">
      <Img fluid={props.data.bedroomOne.childImageSharp.fluid} />
      <Img fluid={props.data.bedroomTwo.childImageSharp.fluid} />
      <Img fluid={props.data.bathroomOne.childImageSharp.fluid} />
      <Img fluid={props.data.laundryOne.childImageSharp.fluid} title="Greystone Place Laundry Room"/>
    </ImageBox>
    <p><b>Suites Include:</b></p>
    <ul>
      <li>Fridge/Stove</li>
      <li>Parking</li>
      <li>Balcony/Deck</li>
      <li>Cats</li>
      <li>Laundry</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
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
   }
`
