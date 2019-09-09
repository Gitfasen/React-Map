import { marker } from '../constants';

const initialState = {
	markers:[],
	clear: false
}

export default function(state = initialState, action) {

	switch(action.type) {

		case marker.success :

			if (action.payload !== undefined) {
				const result = action.payload.filter(function(o1){
					return !state.markers.some(function(o2){
							return o1.id === o2.id;
					});
				});
				if (result.length > 0 ) {
					return {
						markers: result,
						clear: !state.clear
					};
				}else {
					return state;
				}
			}else {
				return state;
			}

		case marker.clear :
			return {
				markers: [...state.markers],
				clear: !state.clear
			};
		
		default:
			return state;
	}
  
}