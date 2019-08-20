import React from 'react'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

import '../styles/image-box.scss'

/**
 * @option {Carousel} Make the ImageBox function as a trigger image carousel
 * @option {Flex} Align images horizontally using flex (up to 25%)
 */
export default class ImageBox extends React.Component {

	constructor(props) {
		super(props)
		// this.playBtn = <FontAwesomeIcon icon={faPlay} />
		// this.replayBtn = <FontAwesomeIcon icon={faRedoAlt} />
		this.slideSpeed = 3000
		this.state = {
			currSlide: 0,
			slideInterval: null,
			slides: [],
			isSlideComplete: false
		}
		// refs
		this.overlay = React.createRef();
		// functions
		this.toggleNextSlide = this.toggleNextSlide.bind(this)
		this.playSlide = this.playSlide.bind(this)
		this.stopSlide = this.stopSlide.bind(this)
	}

	componentDidMount() {
		// if carousel property is set, compile slides into slides array and place in state
		if (this.props.carousel) {
			this.setState(() => {
				const children = ReactDOM.findDOMNode(this).children
				var slides = Array.from(children).filter(this.filterChildren)
				return {
					slides: slides
				}
			},
			(myProps) => this.initCarousel())
		}
	}

	componentWillUnmount() {
		// clear interval for the component if active slide
		clearInterval(this.slideInterval);
	}

	// define the carousel and its children (images)
	initCarousel(startIndex = 0) {
		// place the slide class on all slide children,
		this.state.slides.forEach((currEl, index) => {
			// ignore the overlay element if present
			if (currEl.getAttribute('id') !== 'overlay') {
				currEl.className = 'slide'
			}
		})
		this.state.slides[0].classList.add('current-slide')
	}

	playSlide() {
		console.log('play slide called');
		if (this.state.isSlideComplete) {
			console.log('in the condition');
			let endIndex = this.state.slides.length-1
			this.state.slides[endIndex].classList.remove('current-slide')
			this.state.slides[0].classList.add('current-slide')
		}
		this.overlay.current.classList.remove('active')
		this.slideInterval = setInterval(this.toggleNextSlide, this.slideSpeed)
	}

	// cycles through slides using the currentSlide as an index
	toggleNextSlide() {

		// assuming slides is always set?
		const {slides} = this.state

		// if end of slide
		if (this.state.currSlide == slides.length-1) {
			clearInterval(this.slideInterval)
			slides[this.state.currSlide].classList.remove('current-slide')
			// set state before setting new class
			this.setState(
				() => {
					return {
						currSlide: 0,
						isSlideComplete: true
					}
				}
			)
			this.activateOverlay()
			slides[this.state.currSlide].classList.add('current-slide')
			return
		}

		// update to next slide
		slides[this.state.currSlide].classList.remove('current-slide')
		// set state before setting new class
		this.setState(
			(state, props) => {
				return {currSlide: state.currSlide+1}
			}
		)
		slides[this.state.currSlide].classList.add('current-slide')

   }

	stopSlide() {
		console.log('stopSlide called');
	}

	activateOverlay() {
		alert('activateOverlay called');
		if (!this.overlay.current.classList.contains('active')) {
			this.overlay.current.classList.add('active')
		}
	}

	// returns an array without the overlay element of the image box
	// used to return "pure" children
	filterChildren(child, index, arr) {
		if (!child.hasAttribute('id') || child.getAttribute('id') != 'overlay') {
			return child
		}
	}

	render() {
		return (
			<article ref="imageBox"
				className={
				"image-box "
				+ (this.props.align ? this.props.align : "no-align") + " "
				+ (this.props.flex ? "flex" : "")
			}>
				{this.props.children}
				<div id="overlay" ref={this.overlay} className={this.props.carousel || this.state.isSlideComplete ? 'active' : ''} onClick={this.playSlide}>
					<span>Play Slideshow</span>
					<button title="Click to play slideshow"><FontAwesomeIcon icon={faPlay} /></button>
				</div>
			</article>
		)
	}
}
