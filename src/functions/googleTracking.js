/**
 * This script is for tracking Google Analytics Events
 * It looks for the GA resource and loads it if not found
 * Then it parses the target and sends the appropriate event
 *
 * Author: Dave Gaskin
 * Oct. 3, 2019
 */

const trackGoogle = (e) => {

	let eventType = e.target.getAttribute('data-type'),
   isContactPage = false, isHeader = false, isFooter = false;

   switch (e.target.hasAttribute('data-location')
   && e.target.getAttribute('data-location')) {
      case 'contact':
         isContactPage = true
         break;
      case 'header':
         isHeader = true
         break;
      case 'footer':
         isFooter = true
         break;
      default:
         console.log('The Lion King rules');
   }

	// check for existence of ga script, if not, add it
	if (typeof ga === 'undefined') {

		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		// TODO: get tracking code from env var
		ga('create', process.env.GA_TRACKING_ID, 'auto');

	}

	if (eventType == 'Call' && isContactPage) {
		ga('send', 'event', 'Call', 'Call Greystone Place', 'Contact page')
	} else if (eventType == 'Call' && isHeader) {
		ga('send', 'event', 'Call', 'Call Greystone Place', 'Header')
	} else {
      ga('send', 'event', 'Call', 'Call Greystone Place', '')
      return;
   }

	if (eventType == 'Apply' && isContactPage) {
		ga('send', 'event', 'Apply', 'Download Form', 'Contact page')
	} else if (eventType == 'Apply' && isFooter) {
		ga('send', 'event', 'Apply', 'Download Form', 'Footer')
	} else {
      ga('send', 'event', 'Apply', 'Download Form', '')
      return;
   }

	if (eventType == 'Video') {
		ga('send', 'event', 'Video', 'Play Video', 'Play the video')
	}

}

export default trackGoogle
