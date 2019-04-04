
export default function initMap() {
	var GS = {
		lat: 43.2214553,
		lng: -79.8559704
	};
	var map = new google.maps.Map(
		document.querySelector('#map'),
		{zoom: 4, center: GS}
	);
	return map;
	// var marker = new google.maps.Marker({position: GS, map: map});
}
