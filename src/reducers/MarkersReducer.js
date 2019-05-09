import { ADD_MARKER } from '../constants'

const initialStore = {
	markers: [
		[54.98, 82.89],
		[54.98076605428236, 82.90841102600099],
		[54.97771218642984, 82.87716865539552]
	]
};

export default function MarkersReducer(state = initialStore, action) {
	if (action.type === ADD_MARKER) {
    return {
      ...state,
      markers: [...state.markers, action.payload]
    };
  }
  return state;
}