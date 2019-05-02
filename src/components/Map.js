import React, { Component } from 'react';
import DG from '2gis-maps';
import { connect } from 'react-redux'

class Map extends Component {
	componentDidMount() {
		const Markers = this.props.markers;
		let onAddMarker = this.props.onAddMarker;
		DG.then(function () {
			let map = DG.map('map', {
				center: [54.98, 82.89],
				zoom: 13
			});
			Markers.map((marker) => {DG.marker(marker).addTo(map)});

			map.on('click', function(e) {
				onAddMarker([e.latlng.lat, e.latlng.lng]);
			});
		});

		
	}
  render() {
    return (
			<div id="map" style={{width: "100%", height: "300px"}}></div>
		);
  }
}

export default connect(
	state => ({
		markers: state
	}),
	dispatch => ({
    onAddMarker: (Marker) => {
			dispatch({ type: 'ADD_MARKER', payload: Marker })
			console.log(Marker);
    }
  })
)(Map);