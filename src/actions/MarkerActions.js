import { marker } from '../constants'

export default {
	getMarkers(dispatch) {
		return () => {
			fetch('//localhost:2222/api/markers')
			.then(function(response) {
				if (response.status !== 200) {
					return [];
				} else {
					return response.json();
				}
				
			})
			.then(function(myJson) {
				dispatch({type:marker.success, payload: myJson.data})
			}).catch(err => {
				console.log(err);
			});
		}
	}
}