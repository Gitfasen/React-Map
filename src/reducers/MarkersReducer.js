import { marker } from '../constants'

const initialState = {
	markers: [
		[54.98, 82.89],
		[54.98076605428236, 82.90841102600099],
		[54.97771218642984, 82.87716865539552]
	]
}

export default function MarkersReducer(state = initialState, action) {
	switch(action.type) {
		case	marker.add :
			return {
				...state,
				markers: [...state.markers, action.payload]
			}
		default:
			return state;
	}
  
}