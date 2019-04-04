import React from 'react'

export default class GoogleMap extends React.Component {

	initMap = (container) => {
		const google = window.google
		var GS = {
			lat: 43.2214553,
			lng: -79.8559704
		};
		var map = new window.google.maps.Map(
			container,
			{zoom: 16, center: GS}
		);
		var marker = new google.maps.Marker({position: GS, map: map});
	}

	componentDidMount() {
		let that = this
		let containers = document.querySelectorAll('.map');
		const google = window.google

		// custom forEach function
		var forEach = function (array, callback, scope) {
			for (var i = 0; i < array.length; i++) {
				callback.call(scope, i, array[i]); // passes back stuff we need
			}
		};

		forEach(containers, function (index, value) {
			// console.log(index, value); // passes index + value back!
			that.initMap(value)
		});
		// [].forEach.call(containers, function(container) {
		//   // do whatever
		//   that.initMap(container)
		// });
	}

	render() {
		return <div className="footer-map map" style={{ height: '400px', width: '400px'}}></div>
	}

}
