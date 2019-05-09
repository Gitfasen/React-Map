import React, { Component } from 'react';
import DG from '2gis-maps';
import { connect } from 'react-redux';
import { addMarker } from '../../actions/addMarker';

class Map extends Component {
	componentDidMount() {
		const { onAddMarker, markers } = this.props;
		DG.then(() => {
		 this.map = DG.map('map', {
			center: [54.98, 82.89],
			zoom: 13
		 });
	
		 this.map.on('click', e => {
			onAddMarker([e.latlng.lat, e.latlng.lng]);
		 });
		markers.map((marker) => {
			return (
				DG.marker(marker).addTo(this.map)
			)
		});
		});
	 }
	
	 componentDidUpdate() {
			const { markers } = this.props;
	
			markers.map((marker) => {
				return (
					DG.marker(marker).addTo(this.map)
				)
			});
	 };
  render() {
    return (
			<div>
				<div id="map" style={{width: "100%", height: "300px"}}></div>
				<div className={'mapControll'}></div>
			</div>
			
		);
  }
}

export default connect(
	state => ({
		markers: state.MarkersReducer.markers
	}),
	dispatch => ({
    onAddMarker: (Marker) => {
			dispatch(addMarker(Marker))
    }
  })
)(Map);