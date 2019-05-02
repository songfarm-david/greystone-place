import React from 'react'

import mapStyles from './google-map.module.css'

export default class GoogleMap extends React.Component {

	initMap = (container) => {
		console.log('initMap called');
		// const google = window.google
		var GS = {
			lat: 43.2214553,
			lng: -79.8559704
		};
		// if (!new window.google.maps.Map()) {
		// 	return;
		// }
		// TODO: put a fallback in place when internet connection is not available, otherwise the website breaks
		var map = new this.google.maps.Map(
			container,
			{zoom: 16, center: GS}
		);
		var marker = new this.google.maps.Marker({position: GS, map: map});
	}

	constructor(props) {
		super(props)
		this.google = window.google
	}

	componentDidMount() {
		let that = this
		let containers = document.querySelectorAll('.map');
		// const google = window.google

		// custom forEach function (link?)
		var forEach = function (array, callback, scope) {
			for (var i = 0; i < array.length; i++) {
				callback.call(scope, i, array[i]); // passes back stuff we need
			}
		};

		// for multiple maps on a page
		forEach(containers, function (index, value) {
			// console.log(index, value); // passes index + value back!
			that.initMap(value)
		});
	}

	render() {
		return <div
			className={"map " + mapStyles.googleMapContainer + " " + mapStyles[this.props.align]}></div>
	}

}
