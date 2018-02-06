//** ACTION Creators
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

export const resetBoard = () => {
	return {
		type: 'RESET_BOARD'
	}
}

const saveGame = (gameData) => {

	const game = {
		questions: gameData.questions,
		results: gameData.results
	}

	return {
		type: 'SAVE_GAME',
		payload: game
	}
}

// ** ASYNC Actions
export const submitGame = (game, user) => {
	const gameData = {
		question_ids: game.questions.map(question => question.id),
		results: game.results,
		user_id: user.id
	}

	return dispatch => {
		return fetch(`/api/users/${user.id}/games`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ gameData: gameData })
		})
		.then(response => response.json())
		.catch(error => console.log(error))
		.then(game => {dispatch(saveGame(game))})

	}
}