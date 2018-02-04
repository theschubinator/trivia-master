const initialState = {
	category: '',
	questions: [],
	results: []
}

export const gameReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'SET_CATEGORY':
			return Object.assign({}, state, {category: action.payload})
		case 'UPDATE_RESULTS':
			return Object.assign({}, state, {results: state.results.concat(action.payload)})
		default:
			return state
	}
}