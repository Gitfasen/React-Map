import { marker } from '../constants'

export const MarkerActions = {
	loadMarkers(data) {
		return {
			type: marker.success, 
			payload: data
		}
	},
	saveMarker(marker) {
		console.log(marker);
	}
}