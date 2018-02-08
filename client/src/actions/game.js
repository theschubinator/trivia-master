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
	const gameData = {
		id: game.game.id,
		category: game.game.category,
		correct: game.game.correct
	}
	
	const userData = {	
		id: game.user.id,
		username: game.user.username,
		email: game.user.email,
		admin: game.user.admin,
		games_played: game.user.games_played,
		total_correct: game.user.total_correct,
		entertainment_correct: game.user.entertainment_correct,
		entertainment_played: game.user.entertainment_played,
		history_correct: game.user.history_correct,
		history_played: game.user.history_played,
		science_correct: game.user.science_correct,
		science_played: game.user.science_played,
		sports_correct: game.user.sports_correct,
		sports_played: game.user.sports_played
	}

	return {
		type: 'SAVE_GAME',
		payload: {game: gameData, user: userData}
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