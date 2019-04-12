import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import ImageBox from '../components/image-box'

import { rhythm } from '../utils/typography'
import '../styles/layout.scss'
import '../styles/index.scss'

// import Image from '../components/image'
// import SEO from '../components/seo'

export default (props) => (
  <Layout>
    {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />*/}

    <div id="video-section" className="section" style={{
      marginBottom: rhythm(1.5),
      paddingLeft: rhythm(0.5),
      paddingRight: rhythm(0.5),

      }}>
      <p><em>Video Here</em></p>
    </div>

    <div id="lobby-section" className="section">
       <p><strong>Soft Soothing Music</strong>, emulates throughout the Lobby and Hallways. Warm earth tone colors lend to the serenity of the interior.</p>
       <ImageBox>
          <Img className="image-box-img" fluid={props.data.lobby.childImageSharp.fluid} />
          <Img className="image-box-img" fluid={props.data.lobbyTwo.childImageSharp.fluid} />
          {/*<Img className="image-box-img" fluid={props.data.hallway.childImageSharp.fluid} />*/}
       </ImageBox>
    </div>

    <div id="exterior-section" className="section">
       <p><strong>Lush Landscaping</strong> and natural settings enhance the exterior while <em>video surveillance</em>, high-security controlled access and television monitoring intercom add serenity and peace of mind for all Residents.</p>
       {/*<p><em>Exterior shot here</em></p>*/}
       <ImageBox>
          <Img className="image-box-img" fluid={props.data.exteriorOne.childImageSharp.fluid} />
          <Img className="image-box-img" fluid={props.data.exteriorHall.childImageSharp.fluid} />
       </ImageBox>
    </div>

    <div className="section">
      <p><strong>Bright and Spacious</strong> One and Two Bedroom Suites have generous closet space and include large balconies - some with panoramic views of the Toronto Skyline and the Escarpment. Parking and most utilities are included.</p>
      <ImageBox>
         <Img className="img-float-right" fluid={props.data.roomOne.childImageSharp.fluid} />
         <Img className="img-float-right" fluid={props.data.roomTwo.childImageSharp.fluid} />
      </ImageBox>
      {/*<p><em>Shot of escarpment.</em></p>*/}
    </div>
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
