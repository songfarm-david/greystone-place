import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import ImageBox from '../components/image-box'

import '../styles/layout.scss'

export default (props) => (
  <Layout>
    {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />*/}

    <section id="video-section" className="section">
      <p className="video">Video Here</p>
      <p className="clear">Greystone Place by Limeridge mall is a prestigious, upscale address offering safety, security and quiet enjoyment. Meticulously maintained and ideal for mature adults. Sorry, no dogs allowed.</p>
    </section>

    <section id="lobby-section" className="section">
      <div className="column-parent">
         <p><span className="drop-caps"><strong>Soft Soothing Music</strong></span>, emulates throughout the Lobby and Hallways. Warm earth tone colors lend to the serenity of the interior.</p>
         <p><span className="drop-caps"><strong>Lush Landscaping</strong></span> and natural settings enhance the exterior while video surveillance, high-security controlled access and television monitoring intercom add serenity and peace of mind for all Residents.</p>
      </div>
       <ImageBox carousel="true">
          <Img className="image-box-img" fluid={props.data.lobby.childImageSharp.fluid} />
          <Img className="image-box-img" fluid={props.data.lobbyTwo.childImageSharp.fluid} />
          <Img className="image-box-img" fluid={props.data.exteriorOne.childImageSharp.fluid} />
          <Img className="image-box-img" fluid={props.data.exteriorHall.childImageSharp.fluid} />
          {/*<Img className="image-box-img" fluid={props.data.hallway.childImageSharp.fluid} />*/}
       </ImageBox>
    </section>

    <section className="section">
      <div className="column-parent">
         <p><span className="drop-caps"><strong>Bright and Spacious</strong></span> one and two bedroom suites have generous closet space and include large balconies - some with panoramic views of the Toronto Skyline and the Escarpment. Parking and most utilities are included.
         <br />
         <Link to="/apartments" className="cta">See Apartments</Link>
         </p>
         <p><span className="drop-caps"><strong>The "Leisure Room”</strong></span> is a shared facility designed for comfort, entertainment, and recreation. Bingo, bridge or movie night, a great place to meet friends or simply relax. Enjoy the scheduled leisure room functions or create your own. Equipped with a small efficiency kitchen for catering, this unique facility can be reserved for family functions or small private parties.</p>
      </div>
      <ImageBox carousel="true">
         <Img className="image-box-img" fluid={props.data.roomOne.childImageSharp.fluid} />
         <Img className="image-box-img" fluid={props.data.roomTwo.childImageSharp.fluid} />
         <Img className="image-box-img" fluid={props.data.leisureRoomOne.childImageSharp.fluid} />
         <Img className="image-box-img" fluid={props.data.leisureRoomTwo.childImageSharp.fluid} />
         <Img className="image-box-img" fluid={props.data.leisureRoomThree.childImageSharp.fluid} />
      </ImageBox>
      {/*<p><em>Shot of escarpment.</em></p>*/}

    </section>

    <section className="section">
      <div className="column-parent">
         <p><span className="drop-caps"><strong>Enjoy</strong></span> the scheduled leisure room functions or create your own. Equipped with a small efficiency kitchen for catering, this unique facility can be reserved for family functions or small private parties.</p>
         <p><span className="drop-caps"><strong>Plan</strong></span> ahead to <Link to="/apartment-upgrade-packages"><em>Feather Your Nest</em></Link> and stay in a personalized and worry-free setting. Explore your options while being close to friends, family, and familiar surroundings. Viewing or further inquiries may be directed to our courteous on-site staff at <a href="tel:19055742626">905-574-2626</a>.</p>
      </div>
    </section>
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
      leisureRoomOne: file(relativePath: { eq: "Image-29.jpg" }) {
         ...fluidImage
      }
      leisureRoomTwo: file(relativePath: { eq: "Image-30.jpg" }) {
         ...fluidImage
      }
      leisureRoomThree: file(relativePath: { eq: "Image-31.jpg" }) {
         ...fluidImage
      }
   }
`
