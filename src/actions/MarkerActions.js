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
			.then(function({data}) {
				dispatch({type:marker.success, payload: data})				
			}).catch(err => {
				console.log(err);
			});
		}
	},
	clearMarkers(dispatch) {
		fetch('//localhost:2222/api/marker/clear',
		{ method: 'delete',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ clear: true }),
		});
		dispatch({type:marker.clear, payload: ''})
	}
}