import React from 'react'
import ReactDOM from 'react-dom'
// import imageBoxStyles from './image-box.module.scss'
import '../styles/image-box.scss'
import {initCarousel, startSlide } from './../functions/carousel.js'

export default class ImageBox extends React.Component {

	initCarousel() {

		console.log('inside initCarousel now', this.carousel);
		var images = Array.from(this.carousel.children)
		// add carousel classes to img children of ImageBox
		// the first child item in the array gets the active class
		images.forEach((currVal, index, arr) => {
			if (index == 0) {
				currVal.classList.add('slide-active')
			}
			currVal.classList.add('slide')
		})
		return {
			// imageBoxNode,
			images
		}
	}

	nextSlide() {

		// let imageBox = ReactDOM.findDOMNode(this)
		var slides = Array.from(this.carousel.children)

		slides[this.state.currSlide].classList.remove('slide-active')

		this.state.currSlide = (this.state.currSlide+1)
		if (this.state.currSlide >= slides.length) {
			this.state.currSlide = 0;
		}

		slides[this.state.currSlide].classList.add('slide-active')
	}

	constructor(props) {
		super(props)
		this.carousel = {}
		this.nextSlide = this.nextSlide.bind(this)
		this.state = {
			currSlide: 0
		}
	}

	componentDidMount() {

		// if this is a carousel ImageBox
		if (this.props.carousel) {
			this.carousel = ReactDOM.findDOMNode(this)

			if (this.initCarousel()) {
				//wait 2000 milliseconds and start slide
				var slideInterval = setInterval(this.nextSlide, 2500)
			}
		}

	}

	render() {
		return (
			// console.log('this.props', this.props)
			<article className={
				"image-box " +
				(this.props.align ? this.props.align:"no-align")
			}>
				{this.props.children}
				</article>
		)
	}
}

// const ImageBox = (props) =>
//
// export default ImageBox
