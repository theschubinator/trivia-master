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