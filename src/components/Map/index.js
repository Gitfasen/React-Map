import React, { Component } from 'react';
import DG from '2gis-maps';
import { connect } from 'react-redux';

class Map extends Component {
	state = {
		newMarkers: []
	}

	componentDidMount() {
		const { markers } = this.props;
		DG.then(() => {
			this.map = DG.map('map', {
				center: [54.98, 82.89],
				zoom: 13
			});
		
			this.map.on('click', e => {
				const marker = {lat: e.latlng.lat, lng: e.latlng.lng}; 
				let markers = this.state.newMarkers;
				DG.marker(marker).addTo(this.map);
				markers.push(marker);
				this.setState({newMarkers:markers});
			});
			
			if (Array.isArray(markers)) {
				markers.map((marker) => {
					return (
						DG.marker(marker).addTo(this.map)
					)
				});
			}
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

	onSaveMarkers = () => {
		this.props.saveMarkers(this.state.newMarkers);
	}

  render() {
		const { getMarkers } = this.props;
    return (
			<div>
				<div id="map" style={{width: "100%", height: "400px"}}></div>
				<div className={'mapControll'} style={{marginTop: 30 + 'px'}}>
					<button onClick={getMarkers} type="button" className="btn btn-primary">Get</button>
					<button onClick={this.onSaveMarkers} type="button" className="btn btn-success">Save</button>
				</div>
			</div>
			
		);
  }
}

export default connect(
	state => ({
		markers: state.MarkersReducer.markers
	}),
	dispatch => ({
		getMarkers: () => {
			fetch('//localhost:2222/api/markers')
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				dispatch({type:'MARKER_GETALL_SUCCESS', payload: myJson.data})
			});
		},
		saveMarkers: (data) => {
			console.log('markers= ', data);
		}
  })
)(Map);