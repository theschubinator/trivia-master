const initialState = {
	category: 'All',
	questions: [],
	results: []
}

export const gameReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'SET_CATEGORY':
			return Object.assign({}, state, {category: action.payload})
		case 'UPDATE_RESULTS':
			return Object.assign({}, state, {questions: state.questions.concat(action.payload.question)}, {results: state.results.concat(action.payload.result)})
		case 'SUBMIT_GAME':
			return initialState
		default:
			return state
	}
}