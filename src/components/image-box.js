import React from 'react'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import '../styles/image-box.scss'
import {initCarousel, startSlide } from './../functions/carousel.js'

export default class ImageBox extends React.Component {

	// NOTE: slide UI ideas
	// - the slide goes once through all the way to the end then present a replay button
	// - the slide goes forwards then backwards once

	constructor(props) {
		super(props)
		this.state = {
			currSlide: 0,
			slideInterval: this.slideInterval
		}
		// refs
		this.overlay = React.createRef();

		this.playBtn = <FontAwesomeIcon icon={faPlay} />
		// functions
		this.nextSlide = this.nextSlide.bind(this)
		this.playSlide = this.playSlide.bind(this)
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
	}

	render() {
		return (
			<article
				className={
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

	initCarousel() {
		let carouselEl = this.carousel,
			images = Array.from(carouselEl.children)

		// add carousel classes to img children of ImageBox
		images.forEach((currVal, index) => {

			if (currVal.getAttribute('id') !== 'overlay') {
				// all slides get 'slide' class
				currVal.classList.add('slide')
			}

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

	nextSlide() {
		var slides = Array.from(this.carousel.children)
		var newSlides = slides.filter(this.filterChildren)
		if (this.state.currSlide == newSlides.length-1) {
			clearInterval(this.slideInterval)
			this.triggerOverlay()
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
		this.setState({
			slideInterval: setInterval(this.nextSlide, 3500)
		})
	}

}

// const ImageBox = (props) =>
//
// export default ImageBox
