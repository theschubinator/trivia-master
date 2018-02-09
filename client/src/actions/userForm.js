// ** ACTION creators
export const updateForm = (formData) => {
	return {
		type: 'UPDATE_FORM',
		payload: formData
	};
}

export const resetFormData = () => {
	return {
		type: 'RESET_FORM'
	};
}

export const grabErrors = (errors) => {
	return {
		type: "SHOW_ERRORS",
		payload: errors
	};
}

const updateQuestions = (question) => {
	return {
		type: 'UPDATE_QUESTIONS',
		payload: question
	}
}

// ** ASYNC Actions
export const submitForm = (formData) => {
	return dispatch => {
		return fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user: formData })
		})
			.catch(error => console.log(error))
			.then(response => response.json())
	}
}

export const submitQuestionForm = (formData) => {
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
		.then(question => {dispatch(updateQuestions(question))})
	}
}