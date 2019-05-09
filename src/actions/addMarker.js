import { ADD_MARKER } from '../constants'


export function addMarker(marker) {
	return {
			type: ADD_MARKER,
			payload: marker
	};
}