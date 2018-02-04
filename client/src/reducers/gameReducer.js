const initialState = {
	category: '',
	questions: []
}

export const gameReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'SET_CATEGORY':
			return Object.assign({}, state, {category: action.payload})
		default:
			return state
	}
}