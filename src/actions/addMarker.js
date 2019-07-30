import { marker } from '../constants'

export function addMarker(item) {
	return {
			type: marker.add,
			payload: item
	};
}