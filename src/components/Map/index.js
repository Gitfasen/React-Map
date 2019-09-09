import React, { Component } from 'react';
import DG from '2gis-maps';
import { connect } from 'react-redux';
import MarkerActions from '../../actions/MarkerActions'

class Map extends Component {
	state = {
		newMarkers: []
	}

	componentDidMount() {
		const { markers } = this.props;
		const { newMarkers } = this.state;

		DG.then(() => {
			this.map = DG.map('map', {
				center: [54.98, 82.89],
				zoom: 13
			});

			this.markers = DG.featureGroup();

			this.map.on('click', e => {
				const marker = {lat: e.latlng.lat, lng: e.latlng.lng};
		
				DG.marker(marker).addTo(this.markers);
				this.markers.addTo(this.map);

				this.setState({newMarkers: [marker, ...newMarkers] });
			});
			
			if (Array.isArray(markers) && markers.length > 0) {
				markers.map((item)=>{
					const {lat, lng} = item;
					return DG.marker({lat, lng}).addTo(this.markers);
				});

				this.markers.addTo(this.map);
			}
		});
	}
	
	componentDidUpdate() {
		const { markers, clear } = this.props;

		if (clear) {
			this.markers.removeFrom(this.map);
		}

		if (Array.isArray(markers) && markers.length > 0) {
			markers.map((marker) => {
				const {lat, lng} = marker;
				return DG.marker({lat, lng}).addTo(this.markers);
			});
		}
	};

	onSaveMarkers = async () => {
		const { getMarkers } = this.props;
		const { newMarkers } = this.state;
		
		const savedMarkers = newMarkers.map(item =>
			fetch('//localhost:2222/api/marker',
				{ method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ lat: item.lat, lng: item.lng }),
				}));
	
		await Promise.all(savedMarkers);
		await getMarkers();
	};

  render() {
		const { getMarkers, clearMarkers } = this.props;
    return (
			<div>
				<div id="map" style={{width: "100%", height: "400px"}}></div>
				<div className={'mapControll'} style={{marginTop: 30 + 'px'}}>
					<button onClick={getMarkers} type="button" className="btn btn-primary">Get</button>
					<button onClick={this.onSaveMarkers} type="button" className="btn btn-success">Save</button>
					<button onClick={clearMarkers} type="button" className="btn btn-delete">Clear</button>
				</div>
			</div>
			
		);
  }
}

export default connect(
	( { MarkersReducer } ) => ({
		markers: MarkersReducer.markers,
		clear: MarkersReducer.clear
	}),
	dispatch => ({
		getMarkers : MarkerActions.getMarkers(dispatch),
		clearMarkers : () => {
			MarkerActions.clearMarkers(dispatch);
			console.log('clear')
		}
  })
)(Map);