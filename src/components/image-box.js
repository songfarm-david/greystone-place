import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/image-box.scss'
import {initCarousel, startSlide } from './../functions/carousel.js'

export default class ImageBox extends React.Component {

	// NOTE: slide UI ideas
	// - the slide goes once through all the way to the end then present a replay button
	// - the slide goes forwards then backwards once

	initCarousel() {
		let carouselEl = this.carousel,
		images = Array.from(carouselEl.children)
		// add carousel classes to img children of ImageBox
		images.forEach((currVal, index) => {
			// the first child item in the array gets the active class
			if (index == 0) currVal.classList.add('slide-active')
			// all slides get 'slide' class
			currVal.classList.add('slide')
		})
		return { carouselEl, images }
   }

	nextSlide() {
		var slides = Array.from(this.carousel.children)

		if (this.state.currSlide == slides.length-1) {
			clearInterval(this.slideInterval)
			this.triggerOverlay()
			// trigger overlay and button
			return
		}

		slides[this.state.currSlide].classList.remove('slide-active')
		this.setState({currSlide: (this.state.currSlide+1)})
		slides[this.state.currSlide].classList.add('slide-active')
   }

	triggerOverlay() {
		// this.overlay = document.createElement('div')
		this.carousel.classList.add('overlay')
		// NOTE: add some ARIA attrs here
		// do something here to make fade in work, maybe appendChild returns something
		// this.carousel.appendChild(this.overlay)
	}

	constructor(props) {
		super(props)
		// this.carousel = {}
		this.nextSlide = this.nextSlide.bind(this)
		this.state = {
			currSlide: 0,
			slideInterval: this.slideInterval
		}
		this.width = this.props.width;
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
			// console.log('this.props', this.props)
			<article className={
				"image-box " +
				(this.props.align ? this.props.align : "no-align") + " " +
				(this.props.width ? this.props.width : "half-width")
			}>
				{this.props.children}
				</article>
		)
	}
}

// const ImageBox = (props) =>
//
// export default ImageBox
