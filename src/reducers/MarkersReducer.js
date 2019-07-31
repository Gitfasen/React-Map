import { marker } from '../constants';

const initialState = {
	markers:[]
}

export default function(state = initialState, action) {
	
	switch(action.type) {

		case marker.success :

			const result = action.payload.filter(function(o1){
				return !state.markers.some(function(o2){
						return o1.id === o2.id;          // assumes unique id
				});
			});

			if (result.length > 0) {
				return {
					markers: result
				};
			}else {
				return state;
			}
			
		default:
			return state;
	}
  
}