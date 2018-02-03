export const updateForm = (formData) => {
	return {
		type: 'UPDATE_FORM',
		payload: formData
	}
}

export const submitForm = (formData) => {
	return dispatch => {
		return fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user: formData })
		}).then(response => {debugger})
	}
}