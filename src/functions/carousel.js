
// initialize the carousel by applying carousel classes to the ImageBox component & children
// @param imageBox {HTMLElement} The article element with the carousel="true" prop
// @return {Object} The imageBox element, the array of child images


// function initCarousel(imageBox) {
//
// // TODO: write a function that tests that there are children of this Arg
//
// 	var images = Array.from(imageBox.children)
//
// 	// add carousel classes to img children of ImageBox
// 	// the first child item in the array gets the active class
// 	images.forEach((currVal, index, arr) => {
// 		if (index == 0) {
// 			currVal.classList.add('slide-active')
// 		}
// 		currVal.classList.add('slide')
// 	})
//
// 	return {
// 		imageBox,
// 		images
// 	}
//
//
//
// }

// export function startSlide(element, interval = 1000) {
// 	console.log('startSlide called');
// 	function nextSlide() {
// 		console.log('nextSlide called');
// 		var slides = Array.from(imageBox.children),
// 		currSlide = 0;
// 		slides[currSlide].classList.remove('slide-active')
// 		currSlide = (currSlide+1)%slides.length
// 		slides[currSlide].classList.add('slide-active')
// 	}
// 	// return slideInterval
// }
