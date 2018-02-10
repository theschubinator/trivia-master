export const questionsReducer = (state=[], action) => {
	switch(action.type) {
		case 'LOAD_QUESTIONS':
		 return action.payload
		case 'UPDATE_QUESTIONS':
			return state.concat(action.payload)
		case 'UPDATE_QUESTION':
			const index = state.findIndex(question => question.id === action.payload.id)
			state[index] = action.payload
			return state
		case 'DELETE_QUESTION':
			return state.filter(question => question.id !== parseInt(action.payload))
		default:
		 return state
	}
} 