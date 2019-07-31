import { marker } from '../constants';

export default function MarkersReducer(state = {markers:[]}, action) {
	switch(action.type) {
		case	marker.add :
			return {
				...state,
				markers: [...state.markers, action.payload]
			}
		case marker.success :
			return {
				...state,
				markers: action.payload
			}
		default:
			return state;
	}
  
}