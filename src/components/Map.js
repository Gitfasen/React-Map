import React, { Component } from 'react';
import DG from '2gis-maps';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap'

class Map extends Component {
	constructor(props) {
    super(props);
		const Markers = this.props.markers;
		console.log(Markers);
		const onAddMarker = this.props.onAddMarker;
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
			<div>
				<div id="map" style={{width: "100%", height: "300px"}}></div>
				<div className={'mapControll'}>
					<ButtonToolbar>
						<Button variant="primary" size="lg">Save</Button>
						<Button variant="secondary" size="lg">Show</Button>
					</ButtonToolbar>
				</div>
			</div>
			
		);
  }
}

export default connect(
	state => ({
		markers: state.markers
	}),
	dispatch => ({
    onAddMarker: (Marker) => {
			dispatch({ type: 'ADD_MARKER', payload: Marker })
			console.log(Marker);
    }
  })
)(Map);