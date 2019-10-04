import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import '../styles/header.scss'
import Nav from './nav'

import trackGoogle from '../functions/googleTracking.js'

export default class Header extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         menuOpen: false
      }
      this.toggleMenu = this.toggleMenu.bind(this)

   }

   toggleMenu() {
      let scrim = document.getElementById('scrim');
      let hamburger = document.getElementById('mobMenu')
		this.setState(state => ({
			menuOpen: !state.menuOpen
		}))
      hamburger.classList.toggle("is-active")
      // toggle scrim active class
      if ( scrim.classList.contains('active-scrim') ) {
         scrim.classList.remove('active-scrim')
      } else {
         scrim.classList.add('active-scrim')
      }
   }

   render() {
      const { siteTitle, description } = this.props
      return (
         <header id="header" className="position-number">
           <div id="marqueeContainer" className="centered">
             <h1 id="headline">
               <Link to="/" title="Home">
                 {siteTitle}
               </Link>
             </h1>
             <p id="byline" className="byline">{description}</p>
           </div>
           <Nav menuOpen={this.state.menuOpen} />
           <div id="contactBar" className="">
             <p id="headerPhone"><a href="tel:+19055742626" title="Call Greystone Place" onClick={trackGoogle} data-type="Call"><span className="phone-icon"><FontAwesomeIcon icon={faPhone} /></span>&nbsp;905-574-2626</a></p>
           </div>

           <button id="mobMenu" onClick={this.toggleMenu} className="hamburger hamburger--spin" type="button">
             <span className="hamburger-box">
                <span className="hamburger-inner"></span>
             </span>
             {/*https://jonsuh.com/hamburgers*/}
           </button>

         </header>
      )
   }

}
