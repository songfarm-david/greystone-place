import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import '../styles/layout.css'

// import Image from '../components/image'
// import SEO from '../components/seo'

export default (props) => (
  <Layout>
    {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />*/}
    <p><em>Video Here</em></p>

    <p><strong>Soft</strong>, soothing music emulates throughout the lobby and hallways. Warm earth tone colors lend to the serenity of the interior.</p>
    <Img className="img-float-right" fluid={props.data.lobby.childImageSharp.fluid} />
    <Img className="img-float-right" fluid={props.data.lobbyTwo.childImageSharp.fluid} />
    <Img className="img-float-right" fluid={props.data.hallway.childImageSharp.fluid} />

    <p><strong>Lush</strong> landscaping and natural settings enhance the exterior while video surveillance, high security controlled access and television monitoring intercom add serenity and peace of mind for all Residents.</p>
    <p><em>Exterior shot here</em></p>
    <Img className="img-float-right" fluid={props.data.exteriorOne.childImageSharp.fluid} />
    <Img className="img-float-right" fluid={props.data.exteriorHall.childImageSharp.fluid} />

    <p>Bright and spacious one and two bedroom suites have generous closet space and include large balconies - some with panoramic views of the Toronto Skyline and the Escarpment. Parking and most utilities are included.</p>
    <Img className="img-float-right" fluid={props.data.roomOne.childImageSharp.fluid} />
    <Img className="img-float-right" fluid={props.data.roomTwo.childImageSharp.fluid} />
    <p><em>Shot of escarpment.</em></p>

  </Layout>
)

export const fluidImage = graphql`
   fragment fluidImage on File {
     childImageSharp {
       fluid(maxWidth: 1000) {
         ...GatsbyImageSharpFluid
       }
     }
   }
`

export const pageQuery = graphql`
   query {
      lobby: file(relativePath: { eq: "Image-38.jpg" }) {
         ...fluidImage
      }
      lobbyTwo: file(relativePath: { eq: "Image-37.jpg" }) {
         ...fluidImage
      }
      hallway: file(relativePath: { eq: "Image-36.jpg" }) {
         ...fluidImage
      }
      exteriorOne: file(relativePath: { eq: "Image-32.jpg" }) {
         ...fluidImage
      }
      exteriorHall: file(relativePath: { eq: "Image-33.jpg" }) {
         ...fluidImage
      }
      roomOne: file(relativePath: { eq: "Image-26.jpg" }) {
         ...fluidImage
      }
      roomTwo: file(relativePath: { eq: "Image-24.jpg" }) {
         ...fluidImage
      }
   }
`
