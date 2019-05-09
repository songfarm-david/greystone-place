import React from 'react'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import '../styles/image-box.scss'

export default class ImageBox extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currSlide: 0,
			slideInterval: this.slideInterval
		}
		this.playBtn = <FontAwesomeIcon icon={faPlay} />
		// refs
		this.overlay = React.createRef();
		// functions
		this.nextSlide = this.nextSlide.bind(this)
		this.playSlide = this.playSlide.bind(this)
		this.stopSlide = this.stopSlide.bind(this)
	}

	componentDidMount() {
		// if this is a carousel ImageBox
		if (this.props.carousel) {
			// get the DOM node
			this.carousel = ReactDOM.findDOMNode(this)
			if (this.initCarousel()) {
				//wait 2000 milliseconds and start slide
				this.slideInterval = setInterval(this.nextSlide, 3500)
			}
		}
		console.log('componentDidMount', this.props.children);
	}

	componentWillUnmount() {
		clearInterval(this.slideInterval);
	}

	render() {
		// const children = React.Children.map(this.props.children, child => {
		// 	console.log('yo', child)
		// 	return React.cloneElement(child, { onClick: this.stopSlide })
		// })
		return (
			<article className={
				"image-box "
				+ (this.props.align ? this.props.align : "no-align")
			}>
				{this.props.children}
				<div id="overlay" ref={this.overlay} onClick={this.playSlide}>
					<span>{this.playBtn}</span>
				</div>
			</article>
		)
	}

	stopSlide() {
		console.log('stopSlide called');
	}

	// define the carousel and its children (images)
	initCarousel() {
		let carouselEl = this.carousel,
		images = Array.from(carouselEl.children)

		// add 'slide' class to child images, avoid overlay element
		images.forEach((currVal, index) => {
			if (currVal.getAttribute('id') !== 'overlay') currVal.className = 'slide'
			// the first child item in the array gets the active class
			if (index == 0) currVal.classList.add('slide-active')
		})

		return { carouselEl, images }
   }

	filterChildren(child, index, arr) {
		if (!child.hasAttribute('id') || child.getAttribute('id') != 'overlay') {
			return child
		}
	}

	// get the children
	nextSlide() {
		var slides = Array.from(this.carousel.children)
		var newSlides = slides.filter(this.filterChildren)
		if (this.state.currSlide == newSlides.length-1) {
			clearInterval(this.slideInterval)
			this.triggerOverlay()
			this.setState({currSlide: 0})
			return
		}
		newSlides[this.state.currSlide].classList.remove('slide-active')
		this.setState({currSlide: (this.state.currSlide+1)})
		newSlides[this.state.currSlide].classList.add('slide-active')
   }

	triggerOverlay() {
		this.overlay.current.classList.add('active');
	}

	playSlide() {
		this.overlay.current.classList.remove('active')
		this.initCarousel();
		this.slideInterval = setInterval(this.nextSlide, 3500)
	}

}
