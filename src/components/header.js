import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'
import Nav from './nav'

// TODO: Add social share icons to the header
// let menuState = true;
// function onClick() {
//    menuState = !menuState
//    console.log(menuState)
//    return menuState
// }

export default class Header extends React.Component {

   constructor(props) {
      super(props)
      this.state = {menuOpen: false}
      this.toggleMenu = this.toggleMenu.bind(this)
   }

   toggleMenu() {
		this.setState(state => ({
			menuOpen: !state.menuOpen
		}))
		console.log(this.state.menuOpen);
	}

   render() {
      const { siteTitle, description } = this.props
      return (
         <div id={headerStyles.header}>
           <p className={headerStyles.contactPhone}><a tel="905-574-2626" title="Call Greystone Place">905-574-2626</a></p>
           <button id="mobMenu" onClick={this.toggleMenu}>X</button>
           <div id={headerStyles.marquee}>
             <h1>
               <Link to="/">
                 {siteTitle}
               </Link>
             </h1>
             <p name="description">{description}</p>
           </div>
           <Nav menuOpen={this.state.menuOpen} />
         </div>
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
