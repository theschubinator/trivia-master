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
	debugger
	return {
		type: "SHOW_ERRORS",
		payload: errors
	};
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