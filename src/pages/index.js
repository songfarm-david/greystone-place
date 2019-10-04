import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from '../components/seo'
import Layout from '../components/layout'
import ImageBox from '../components/image-box'

import loadVideo from '../functions/videoLoader.js'
import trackGoogle from '../functions/googleTracking.js'

import '../functions/thankYou_confirmation.js'

import transparentImg from '../images/transparent.png'
// eslint-disable-next-line
import {fluidImage} from '../utils/fluidImage'

import '../styles/layout.scss'
import '../styles/indexPage.scss'

export default class IndexPage extends React.Component {

   componentDidMount() {
      loadVideo('https://d2f2gzwlxrc309.cloudfront.net/new/512+Mohawk+Rd+(V2)HLS-Output-custom.m3u8')
   }

   render() {
      return (
         <Layout>
            <SEO
               title="Home"
               description="Gracious Apartment Living offered at Greystone Place. 1 and 2-bedroom suites available."
               keywords={[`hamilton mountain`, `apartment rentals`, 'suite rentals', '1 bedroom', '2 bedroom']}
            />

            <section id="video-section" className="section">
               <h1 className="screen-reader" >Welcome to Greystone Place</h1>
               <video id="greystoneVideo" height="auto" width="100%" preload="auto" poster={transparentImg} onPlay={trackGoogle} data-type="Video" controls>
                  <p>Your browser doesn't support web video. Here is a <a href={''}>link to the video</a> instead.</p>
               </video>
               <p>Greystone Place is a prestigious, upscale address offering safety, security and quiet enjoyment. Meticulously maintained and ideal for mature adults.</p>
               {/* TODO: test fallback link*/}
               {/*<hr />*/}
            </section>

            <section className="section">
               {/*<h2 className="screen-reader">Outdoors and Exterior Building</h2>*/}
               <h2 className="emphasized-text">Lobby and Surroundings</h2>
               <p>Lush landscaping and natural settings enhance the exterior while video surveillance, high-security controlled access and television monitoring intercom add serenity and peace of mind for all Residents.</p>
               <ImageBox flex ariaLabel="exterior-surroundings">
                  <h3 id="exterior-surroundings" className="screen-reader">Images of outdoors and exterior building</h3>
                  <Img
                     className="image-box-img featured-flex"
                     alt="Image of building from front east to west" fluid={this.props.data.buildingEastWest.childImageSharp.fluid} />
                  <Img
                     className="image-box-img"
                     alt="Image of Greystone Place front lawn placard" fluid={this.props.data.curbside.childImageSharp.fluid} />
                  <Img
                     className="image-box-img"
                     alt="Image of exterior front entrance"
                     fluid={this.props.data.frontDoor.childImageSharp.fluid} />
               </ImageBox>
               <p>Soft soothing music emanates throughout the lobby and hallways. Warm earth tone colors lend to the tranquility of the interior.</p>
               <ImageBox flex ariaLabel="indoor-lobby">
                  <h3 id="indoor-lobby" className="screen-reader">Images of interior lobby</h3>
                  <Img className="image-box-img"
                     alt="Image of front lobby"
                     fluid={this.props.data.lobby.childImageSharp.fluid} />
                  <Img className="image-box-img"
                     alt="Image of front elevators"
                     fluid={this.props.data.lobbyTwo.childImageSharp.fluid} />
               </ImageBox>
               <span>&nbsp;</span>
            </section>

            <section className="section section-grey">
               <h1 className="header-link emphasized-text"><Link to="/suites">1 and 2-Bedroom Suites</Link></h1>
               <ImageBox carousel>
                  <Img className="image-box-img" fluid={this.props.data.roomTwo.childImageSharp.fluid} />
                  <Img className="image-box-img" fluid={this.props.data.roomOne.childImageSharp.fluid} />
                  <Img className="image-box-img" fluid={this.props.data.roomKitchen.childImageSharp.fluid} />
                  <Img className="image-box-img" fluid={this.props.data.roomBath.childImageSharp.fluid} />
               </ImageBox>
               <div>
                  <p>Bright and spacious 1 and 2-Bedroom suites have generous closet space and include large balconies - some with panoramic views of the Toronto skyline and the escarpment. Parking and most utilities are included.
                  </p>
               </div>
               <Link to="/suites" className="cta right">See Full Suites</Link>
            </section>

            <section className="section">
               <article> {/*className="sidebar"*/}
                  <h1 className="emphasized-text" id="leisure-room">The Leisure Room</h1>
                  <p>The Leisure Room is a shared facility designed for comfort, entertainment, and recreation. Bingo, bridge or movie night, a great place to meet friends or simply relax.</p>
                  <ImageBox flex ariaLabel="leisure-room">
                     <Img className="image-box-img"
                        alt="Image one of leisure room"
                        fluid={this.props.data.leisureRoomOne.childImageSharp.fluid} />
                     <Img className="image-box-img"
                        alt="Image two of leisure room"
                        fluid={this.props.data.leisureRoomTwo.childImageSharp.fluid} />
                     <Img className="image-box-img"
                        alt="Image three of leisure room"
                        fluid={this.props.data.leisureRoomThree.childImageSharp.fluid} />
                  </ImageBox>
                  <p>Enjoy the scheduled leisure room functions or create your own. Equipped with a small efficiency kitchen for catering, this unique facility can be reserved for family functions or small private parties.</p>
                  <p>Viewing or further inquiries may be directed to our courteous on-site staff at <a href="tel:19055742626">905-574-2626</a>.</p>
                  <span>&nbsp;</span>
               </article>
            </section>

            <section className="section reverse-layout">
               <h3 className="h2">" Feather Your Nest "</h3>
               <p>Plan ahead to <em>"Feather Your Nest"</em> and stay in a personalized and worry-free setting. Explore our <Link to="/designer-upgrade-packages">Designer Upgrades Packages</Link> while being close to friends, family, and convenient surroundings.</p>
               <Link to="/designer-upgrade-packages" className="cta">Learn more</Link>
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
      buildingEastWest: file(relativePath: { eq: "building-east-west.JPG" }) {
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
