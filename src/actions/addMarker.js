import { marker } from '../constants'


export function addMarker(item) {
	return {
			type: marker.ADD_MARKER,
			payload: item
	};
}