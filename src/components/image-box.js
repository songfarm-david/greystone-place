import React from 'react'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

import '../styles/image-box.scss'

export default class ImageBox extends React.Component {

	constructor(props) {
		super(props)

		this.playBtn = <FontAwesomeIcon icon={faPlay} />
		this.replayBtn = <FontAwesomeIcon icon={faRedoAlt} />

		this.state = {
			currSlide: 0,
			slideInterval: null,
			slides: [],
			isComplete: false
		}

		// refs
		this.overlay = React.createRef();

		// functions
		this.nextSlide = this.nextSlide.bind(this)
		this.playSlide = this.playSlide.bind(this)
		this.stopSlide = this.stopSlide.bind(this)
		// this.resetSlides = this.resetSlides.bind(this)

	}

	componentDidMount() {
		console.log('componentDidMount called');

		if (this.props.carousel) {
			this.setState(() => {
				const children = ReactDOM.findDOMNode(this).children
				var slides = Array.from(children).filter(this.filterChildren)
				return {slides:slides}
			})
			this.initCarousel()
		}

	}

	componentWillUnmount() {
		clearInterval(this.slideInterval);
	}

	render() {
		console.log('render called');
		return (
			<article
				ref="imageBox"
				className={
				"image-box "
				+ (this.props.align ? this.props.align : "no-align")
			}>
				{this.props.children}
				<div id="overlay"
				ref={this.overlay}
				className={this.props.carousel || this.state.isComplete ? 'active' : ''}
				onClick={this.playSlide}>

					<span>{this.state.isComplete ? this.replayBtn : this.playBtn}</span>
				</div>
			</article>
		)
	}

	stopSlide() {
		console.log('stopSlide called');
	}

	// define the carousel and its children (images)
	initCarousel(startIndex = 0) {
		console.log('initCarousel called.');

		// get the DOM node
		let carouselInnerEls = Array.from(this.refs.imageBox.children)

		carouselInnerEls.forEach((currEl, index) => {
			if (currEl.getAttribute('id') !== 'overlay') {
				currEl.className = 'slide'
			}
		})

		switch (startIndex) {
			case 0:
				carouselInnerEls[0].classList.add('current-slide')
				break;
		}

   }

	// cycles through slides using the currentSlide as an index
	nextSlide() {
		console.log('nextSlide called');

		const {slides} = this.state

		if (this.state.currSlide == slides.length-1) {
			console.log('reached the end!');
			clearInterval(this.slideInterval)
			this.setState(() => {
				return {
					currSlide: 0,
					isComplete: true
				}
			})
			this.activateOverlay()
			return
		}
		slides[this.state.currSlide].classList.remove('current-slide')
		this.setState((state, props) => {
			return {currSlide: state.currSlide+1}
		})
		slides[this.state.currSlide].classList.add('current-slide')

   }

	// returns an array without the overlay element of the image box
	// used to return "pure" children
	filterChildren(child, index, arr) {
		if (!child.hasAttribute('id') || child.getAttribute('id') != 'overlay') {
			return child
		}
	}

	activateOverlay() {
		console.log('activateOverlay called')
		if (!this.overlay.current.classList.contains('active')) {
			this.overlay.current.classList.add('active')
		}
	}

	playSlide() {
		console.log('playSlide called');
		if (this.state.isComplete) {
			let endIndex = this.state.slides.length-1
			this.state.slides[endIndex].classList.remove('current-slide')
			this.state.slides[0].classList.add('current-slide')
		}
		this.overlay.current.classList.remove('active')
		this.slideInterval = setInterval(this.nextSlide, 3500)
	}

}
