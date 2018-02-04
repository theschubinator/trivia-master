export const setGameCategory = (category) => {
	return {
		type: 'SET_CATEGORY',
		payload: category
	}
}

export const updateGameResults = (result) => {
	return {
		type: 'UPDATE_RESULTS',
		payload: result
	}
}