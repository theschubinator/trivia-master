export const questionsReducer = (state=[], action) => {
	switch(action.type) {
		case 'LOAD_QUESTIONS':
		 return action.payload
		default:
		 return state
	}
} 