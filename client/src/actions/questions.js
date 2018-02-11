// ** ACTION creators
const setQuestions = (questions) => {
	return {
		type: 'LOAD_QUESTIONS',
		payload: questions
	}
}

const removeQuestion = (question_id) => {
	return { 
		type: 'DELETE_QUESTION',
		payload: question_id
	}
}

export const editQuestion = (question, username) => {
	return {
		type: 'UPDATE_QUESTION',
		payload: question
	}
}

export const updateQuestions = (question) => {
	return {
		type: 'UPDATE_QUESTIONS',
		payload: question
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

export const deleteQuestion = (question_id) => {
	return dispatch => {
		return fetch(`api/questions/${question_id}`, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({id: question_id})
		})
		.then(response => response.json())
		.catch(error => console.log(error))
		.then(message => console.log(message))
		.then(() => dispatch(removeQuestion(question_id)))
	}
}

export const updateQuestion = (formData, question_id) => {
	return dispatch => {
		return fetch(`/api/questions/${question_id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({formData: formData})
		})
		.then(response => response.json())
		.catch(error => console.log(error))
	}
}

export const submitQuestion = (formData) => {
	return dispatch => {
		return fetch('/api/questions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({formData: formData})
		})
		.catch(error => console.log(error))
		.then(response => response.json())
	}
}