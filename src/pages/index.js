import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageBox from '../components/image-box'

import posterImg from '../images/Image-38.jpg'
// eslint-disable-next-line
import {fluidImage} from '../utils/fluidImage'

import '../styles/layout.scss'

import loadVideo from '../functions/videoLoader.js'

export default class IndexPage extends React.Component {

   componentDidMount() {
      // loadVideo(this.props.data.video.edges[0].node.publicURL)
      loadVideo('http://d2f2gzwlxrc309.cloudfront.net/Greystone+Place+-+512+Mohawk+Rd+E+HamiltonHLS+stream.m3u8')
   }

   render() {
      console.log(this.props.data);
      return (
         <Layout>
        <SEO title="Home" description="Gracious Apartment Living offered at Greystone Place. 1 and 2-bedroom suites available." keywords={[`hamilton mountain`, `apartment rentals`, 'suite rentals', '1 bedroom', '2 bedroom']} />
        <section id="video-section" className="section">
            <h2 className="screen-reader">Welcome to Greystone Place</h2>
           <p><span className="drop-caps">Greystone Place</span> by <a href="https://www.cfshops.com/lime-ridge.html" title="Go to Limeridge Mall website" target="_blank">Limeridge mall</a> is a prestigious, upscale address offering safety, security and quiet enjoyment. Meticulously maintained and ideal for mature adults.</p>
           <video id="greystoneVideo" height="auto" width="100%" poster={posterImg} controls>
             <p>Your browser doesn't support web video. Here is a <a href={''}>link to the video</a> instead.</p>
           </video>
           {/* TODO: test fallback link*/}
           <hr />
        </section>

        <section id="lobby-section" className="section">
         <h3 className="screen-reader">Lobby and Surroundings</h3>
          <div className="column-parent">
             <p><span className="drop-caps">Soft Soothing Music</span> emanates throughout the Lobby and Hallways. Warm earth tone colors lend to the serenity of the interior.</p>
             <p><span className="drop-caps"><strong>Lush Landscaping</strong></span> and natural settings enhance the exterior while video surveillance, high-security controlled access and television monitoring intercom add serenity and peace of mind for all Residents.</p>
          </div>
           <ImageBox carousel="true">
              <Img className="image-box-img" fluid={this.props.data.lobby.childImageSharp.fluid} />
              <Img className="image-box-img" fluid={this.props.data.lobbyTwo.childImageSharp.fluid} />
              <Img className="image-box-img" fluid={this.props.data.curbside.childImageSharp.fluid} />
              <Img className="image-box-img" fluid={this.props.data.frontDoor.childImageSharp.fluid} />
              <Img className="image-box-img" fluid={this.props.data.building.childImageSharp.fluid} />
           </ImageBox>
           <hr />

        </section>

        <section className="section">
        <h3 className="screen-reader">1 and 2-Bedroom Suites</h3>
          <div>
             <p><span className="drop-caps">Bright and Spacious</span> 1 and 2-Bedroom Suites have generous closet space and include large balconies - some with panoramic views of the Toronto Skyline and the Escarpment. {/*Parking and most utilities are included.*/}
             </p>
          </div>
          <Link to="/suites" className="cta">See Suites</Link>
          <ImageBox carousel="true">
             <Img className="image-box-img" fluid={this.props.data.roomOne.childImageSharp.fluid} />
             <Img className="image-box-img" fluid={this.props.data.roomTwo.childImageSharp.fluid} />
             <Img className="image-box-img" fluid={this.props.data.roomKitchen.childImageSharp.fluid} />
             <Img className="image-box-img" fluid={this.props.data.roomBath.childImageSharp.fluid} />
          </ImageBox>
          <hr />
        </section>

        <section className="section">
           <article className="sidebar">
             <ImageBox>
              <Img className="image-box-img" fluid={this.props.data.leisureRoomOne.childImageSharp.fluid} />
                <Img className="image-box-img" fluid={this.props.data.leisureRoomTwo.childImageSharp.fluid} />
                <Img className="image-box-img" fluid={this.props.data.leisureRoomThree.childImageSharp.fluid} />
             </ImageBox>
             <p><span className="drop-caps"><strong>The "Leisure Room”</strong></span> is a shared facility designed for comfort, entertainment, and recreation. Bingo, bridge or movie night, a great place to meet friends or simply relax. Enjoy the scheduled leisure room functions or create your own. Equipped with a small efficiency kitchen for catering, this unique facility can be reserved for family functions or small private parties.</p>
             <p><span className="drop-caps"><strong>Enjoy</strong></span> the scheduled leisure room functions or create your own. Equipped with a small efficiency kitchen for catering, this unique facility can be reserved for family functions or small private parties.</p>
             <p>Viewing or further inquiries may be directed to our courteous on-site staff at <a href="tel:19055742626">905-574-2626</a>.</p>

           </article>
        </section>

        <section className="section reverse-layout">
         <h3 className="h2">Design Upgrades</h3>
         <p>Plan ahead to <Link to="/apartment-upgrade-packages"><span className="drop-caps">Feather Your Nest</span></Link> and stay in a personalized and worry-free setting. Explore your options while being close to friends, family, and familiar surroundings. </p>
         <Link to="/apartment-upgrade-packages" className="cta">Learn more</Link>
        </section>
      </Layout>
   )

   }
}

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
      roomKitchen: file(relativePath: { eq: "Image-23.jpg" }) {
         ...fluidImage
      }
      roomBath: file(relativePath: { eq: "Image-27.jpg" }) {
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
      frontDoor: file(relativePath: { eq: "front-door.JPG" }) {
         ...fluidImage
      }
      building: file(relativePath: { eq: "building.JPG" }) {
         ...fluidImage
      }
      curbside: file(relativePath: { eq: "curbside.JPG" }) {
         ...fluidImage
      }
      video: allFile(filter: { extension: {eq: "m3u8"}}) {
       edges {
         node {
           id
           extension
           absolutePath
           relativePath
           name
           publicURL
           ext
           relativeDirectory
         }
       }
     }
   }
`
