/**
 * Script for setting up Google Analytics behavior tracking
 * Used to track phone calls, etc..
 *
 * Author: Dave Gaskin
 * Oct. 3, 2019
 */

const trackGoogle = (e) => {
	// console.log('trackGoogle called', e.target.getAttribute('data-type'));
	// console.log(process.env.GA_TRACKING_ID);

	let isContactPage = false,
	eventType = e.target.getAttribute('data-type');

	if (e.target.hasAttribute('data-location') && e.target.getAttribute('data-location') == 'contact') {
		isContactPage = true
	}

	// check for existence of ga script, if not, add it
	if (typeof ga === 'undefined') {
		// console.log('ga is undefined');
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		// TODO: get tracking code from env var
		ga('create', process.env.GA_TRACKING_ID, 'auto');
	}

	if (eventType == 'Call' && isContactPage) {
		ga('send', 'event', 'Call', 'Call Greystone Place', 'Contact page')
	} else if (eventType == 'Call') {
		ga('send', 'event', 'Call', 'Call Greystone Place', 'Header')
		return;
	}

	if (eventType == 'Apply' && isContactPage) {
		ga('send', 'event', 'Apply', 'Download Form', 'Contact page')
	} else if (eventType == 'Apply') {
		ga('send', 'event', 'Apply', 'Download Form', 'Footer')
		return;
	}

	if (eventType == 'Video') {
		ga('send', 'event', 'Video', 'Play Video', 'Play the video')
	}

}

export default trackGoogle

// this link shows two different approaches for loading the script: https://developers.google.com/analytics/devguides/collection/analyticsjs
// the goal is to create a module that takes in the event and uses its argument to structure the send category, etc...
// NOTE: potential categories: phone, video, form, etc..
