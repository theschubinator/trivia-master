// ** ACTION creators
const setQuestions = (questions) => {
	return {
		type: 'LOAD_QUESTIONS',
		payload: questions
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