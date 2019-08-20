import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'
import Nav from './nav'

<<<<<<< Updated upstream
// TODO: Add social share icons to the header

const Header = ({ siteTitle, description }) => (
  <div id={headerStyles.header}>
    <p className={headerStyles.contactPhone}><a href="tel:905-574-2626" title="Call Greystone Place">905-574-2626</a></p>
    <div id={headerStyles.headerContainer}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <p name="description">{description}</p>
    </div>
    <Nav />
  </div>
)

export default Header
=======
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
             <p id="headerPhone"><a href="tel:+19055742626" title="Call Greystone Place"><span className="phone-icon"><FontAwesomeIcon icon={faPhone} /></span>&nbsp;905-574-2626</a></p>
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
>>>>>>> Stashed changes
