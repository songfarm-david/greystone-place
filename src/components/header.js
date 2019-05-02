import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'

import '../styles/header.scss'
import Nav from './nav'

export default class Header extends React.Component {

   constructor(props) {
      super(props)
      this.state = {menuOpen: false}
      this.toggleMenu = this.toggleMenu.bind(this)
      this.bars = <FontAwesomeIcon icon={faBars} />
   }

   toggleMenu() {
      let scrim = document.getElementById('scrim');

		this.setState(state => ({
			menuOpen: !state.menuOpen
		}))

      // toggle scrim active class
      if (scrim.classList.contains('active-scrim')) {
         scrim.classList.remove('active-scrim')
      } else {
         scrim.classList.add('active-scrim')
      }
	}

   render() {
      const { siteTitle, description } = this.props
      const bars = "Bars"
      return (
         <header id="header">
            <div id="topBar">
               <p id="headerPhone"><a href="tel:+19055742626" title="Call Greystone Place">905-574-2626</a></p>
               <button id="mobMenu" onClick={this.toggleMenu}>{this.bars}</button>
            </div>
           <div id="marqueeContainer">
             <h1 id="headline">
               <Link to="/">
                 {siteTitle}
               </Link>
             </h1>
             <p id="byline" className="byline">{description}</p>
           </div>
           <Nav menuOpen={this.state.menuOpen} />
         </header>
      )
   }

}

// const Header = ({ siteTitle, description }) => (
//   <div id={headerStyles.header}>
//     <p className={headerStyles.contactPhone}><a tel="905-574-2626" title="Call Greystone Place">905-574-2626</a></p>
//     <button id="mobMenu" onClick={onClick}>X</button>
//     <div id={headerStyles.marquee}>
//       <h1>
//         <Link to="/">
//           {siteTitle}
//         </Link>
//       </h1>
//       <p name="description">{description}</p>
//     </div>
//     <Nav menuOpen={menuState} />
//   </div>
// )

// export default Header
