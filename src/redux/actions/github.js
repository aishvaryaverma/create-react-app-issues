import { toast } from 'react-toastify';
import { LOAD_ISSUES, UPDATE_ISSUES } from '../types';
// utils
import axios from '../../utils/axios';

export const getIssues = ({ per_page, page, type }, update) => async dispatch => {
	try {
		const configs = {
			headers: { 'Accept': 'application/vnd.github.v3+json' },
			params: {
				state: type,
				per_page,
				page
			}
		};
		const res = await axios.get('/repos/facebook/create-react-app/issues', configs);
		
		dispatch({
			type: update ? UPDATE_ISSUES : LOAD_ISSUES,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		const { message } = err.response.data;
		toast.error(message);
	}
}

export const updateAction = (type, value) => async dispatch => {
	dispatch({
		type: 'UPDATE_'+type,
		payload: value
	})
}
