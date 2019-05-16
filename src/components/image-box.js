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
			slideInterval: this.slideInterval,
			slides: []
		}
		this.playBtn = <FontAwesomeIcon icon={faPlay} />
		// refs
		this.overlay = React.createRef();
		// functions
		this.nextSlide = this.nextSlide.bind(this)
		this.playSlide = this.playSlide.bind(this)
		this.stopSlide = this.stopSlide.bind(this)
		this.resetSlides = this.resetSlides.bind(this)
	}

	componentDidMount() {
		// if this is a carousel ImageBox
		if (this.props.carousel) {
			// get the DOM node
			this.carousel = ReactDOM.findDOMNode(this)
			this.slides = this.carousel
			console.log('this.slides?', this.slides.children);
			// console.log('componentDidMount. \nThis carousel?', this.carousel.chilren);
			//
			// let monkey = Array.from(this.carousel)
			// this.state.slides: this.props.carousel
			//
			// console.log('setting slides:', this.state.slides);
			this.initCarousel()

			// if () {
			// 	//wait 2000 milliseconds and start slide
			// 	// this.slideInterval = setInterval(this.nextSlide, 3500)
			// }
		}


	}

	componentWillUnmount() {
		clearInterval(this.slideInterval);
	}

	render() {
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
		console.log('initCarousel called. \nSlides?', this.state.slides);
		// let carouselEl = this.carousel,
		// images = Array.from(carouselEl.children)
		// console.log('carousel children are', images);
		// add 'slide' class to child images, avoid overlay element
		// console.log('slides', this.state.slides);
		// this.setState({
		// 	slides: ReactDOM.findDOMNode(this)
		// })
		// console.log('slides set', this.state.slides);
		this.resetSlides()

		// console.log('contains active class', this.overlay, typeof this.overlay)
		// if (!this.overlay.current.classList.contains('active')) {
		// 	console.log(this.overlay.classList) // undefined
		// 	console.log(this.overlay)
		// } else {
		// 	console.log('classList?', this.overlay.current.classList);
		// }
		this.triggerOverlay()
		return

   }

	// returns an array without the overlay element of the image box
	// used to return "pure" children
	filterChildren(child, index, arr) {
		if (!child.hasAttribute('id') || child.getAttribute('id') != 'overlay') {
			return child
		}
	}

	// cycles through slides using the currentSlide as an index
	nextSlide() {
		// var slides = Array.from(this.carousel.children)
		// var newSlides = slides.filter(this.filterChildren)

		// get only the slides (and not the overlay)
		// let slides = a constant here
		// var newSlides = Array.from(this.carousel.children).filter(this.filterChildren)
		// console.log('nextSlide called. slides array is', newSlides);
		// if its the last slide in the Slides array
		if (this.state.currSlide == this.slides.length-1) {
			clearInterval(this.slideInterval)
			this.setState({currSlide: 0})
			return this.triggerOverlay()
		}
		this.slides[this.state.currSlide].classList.remove('slide-active')
		this.setState({currSlide: (this.state.currSlide+1)})
		this.slides[this.state.currSlide].classList.add('slide-active')
   }

	triggerOverlay() {
		if (this.overlay.current.classList.contains('active')) {
			return
		}
		this.overlay.current.classList.add('active');
	}

	playSlide() {
		console.log('playSlide called. Slides?', this.state.slides);
		this.overlay.current.classList.remove('active')
		// this.initCarousel();
		// reset slide-active class
		this.resetSlides(this.state.slides)
		this.slideInterval = setInterval(this.nextSlide, 3500)
	}

	resetSlides(slides = this.slides.children) {
		console.log('resetSlides called', this.slides.children, slides);
		// this.slides.children.forEach((currVal, index) => {
		// 	console.log('loopy', currVal);
		// 	// check for elements with the class 'slide'
		// 	if (currVal.getAttribute('id') !== 'overlay') currVal.className = 'slide'
		// 	// the first child item in the array gets the active class
		// 	if (index == 0) currVal.classList.add('slide-active')
		// })
	}

}
