export const setGameCategory = (category) => {
	return {
		type: 'SET_CATEGORY',
		payload: category
	}
}

export const updateGameResults = (question, result) => {
	return {
		type: 'UPDATE_RESULTS',
		payload: {question, result}
	}
}