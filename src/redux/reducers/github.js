import { LOAD_ISSUES, UPDATE_ISSUES, UPDATE_WATCH, UPDATE_STAR, UPDATE_FORK } from '../types';

const initialState = {
	issues: {
		loading: true,
		data: null,
	},
	actions: {
		watch: 0,
		star: 0,
		fork: 0
	}
}

const github = (state = initialState, action) => {
	const { type, payload } = action;
	console.log(payload)
	switch(type) {
		case LOAD_ISSUES:
			return {
				...state,
				issues: {
					...state.issues,
					loading: false,
					data: payload
				}
			}
		case UPDATE_ISSUES:
			return {
				...state,
				issues: {
					...state.issues,
					loading: false,
					data: [...state.issues.data, ...payload]
				}
			}
		case UPDATE_WATCH:
			return {
				...state,
				actions: {
					...state.actions,
					watch: payload
				}
			}
		case UPDATE_STAR:
			return {
				...state,
				actions: {
					...state.actions,
					star: payload
				}
			}
		case UPDATE_FORK:
			return {
				...state,
				actions: {
					...state.actions,
					fork: payload
				}
			}
		default:
			return state
	}
}

export default github
