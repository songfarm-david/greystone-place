import React from 'react'

import mapStyles from './google-map.module.scss'

export default class GoogleMap extends React.Component {

	constructor(props) {
		super(props)
		this.onScriptLoad = this.onScriptLoad.bind(this)
	}

	onScriptLoad() {
		const options = {
			center: {
				lat: 43.2214553,
				lng: -79.8559704
			},
			zoom: 16
		}
		const map = new window.google.maps.Map(
			document.getElementById(this.props.id),
			options)
		this.initMap(map, options.center)
	}

	initMap = (map, coords) => {
		var marker = new window.google.maps.Marker({
			position: coords,
			map: map
		})
	}

	componentDidMount() {
		// Source: https://cuneyt.aliustaoglu.biz/en/using-google-maps-in-react-without-custom-libraries/
		if (!window.google) {
			var s = document.createElement('script')
      	s.type = 'text/javascript'
      	s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAspXD0uq-mwbzPGLPfLN-I1Xe34ryUCxY'
      	var x = document.getElementsByTagName('script')[0];
      	x.parentNode.insertBefore(s, x);
      	// Below is important.
      	//We cannot access google.maps until it's finished loading
	      s.addEventListener('load', e => {
	        this.onScriptLoad()
	      })
		} else {
			this.onScriptLoad()
		}

	}

	render() {
		return <div id={this.props.id}
			className={"map " + mapStyles.googleMapContainer + " " + mapStyles[this.props.align]}></div>
	}

}
