// ** ACTION creators
const setQuestions = (questions) => {
	return {
		type: 'LOAD_QUESTIONS',
		payload: questions
	}
}

const setCategories = (categories) => {
	return {
		type: 'LOAD_CATEGORIES',
		payload: categories
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

// ** ASYNC actions
export const loadQuestions = () => {
	return dispatch => {
	 return fetch('api/questions')
		.then(response => response.json())
		.catch(error => console.log(error))
		.then(questions => dispatch(setQuestions(questions)))
	}
}

export const loadCategories = () => {
	return dispatch => {
		return fetch('/api/categories')
		.then(response => response.json())
		.catch(error => console.log(error))
		.then(categories => dispatch(setCategories(categories)))
	}
}

export const loadQuestion = (url) => {
	return dispatch => {
		return fetch(`/api/${url}`)
			.then(response => response.json())
			.catch(error => console.log(error))
			// .then(game => {dispatch(setGame(game))})
	}
}