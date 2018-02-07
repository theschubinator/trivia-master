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

export const saveGame = (game, questions) => {
	let gameData = [];
	for(let i=0; i < 10; i++) {
		const question = questions.find(question => question.id === game.questions[i].id)
		gameData.push({...question, ...game.results[i]})	
	}

	return {
		type: 'SAVE_GAME',
		payload: gameData
	}
}

// ** ASYNC Actions
export const submitGame = (game, user) => {
	const gameData = {
		category: game.category,
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
		// .then(game => {dispatch(saveGame(game))})

	}
}