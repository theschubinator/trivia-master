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

export const saveGame = (game) => {

	return {
		type: 'SAVE_GAME',
		payload: game
	}
}

export const setGame = (gameData) => {
	let game = {questions: []}
	for(let i=0; i < 10; i++) {
		game.questions.push({...gameData.questions[i], correct: gameData.results[i] })
	}
	return {
		type: 'LOAD_GAME_QUESTIONS',
		payload: game
	}
}

// ** ASYNC Actions
export const submitGame = (game, user) => {
	const gameData = {
		category: game.category,
		correct: game.results.filter(result => result).length,
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

export const loadQuestion = (url) => {
	return dispatch => {
		return fetch(`/api/${url}`)
			.then(response => response.json())
			.catch(error => console.log(error))
	}
}