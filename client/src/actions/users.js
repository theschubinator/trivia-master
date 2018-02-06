//** ACTION Creators
export const loadUser = (user) => {
	return {
		type: 'LOAD_USER',
		payload: user
	}
}

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
} 

const loadGames = (games) => {
	return {
		type: 'LOAD_USER_GAMES',
		payload: games
	}
}

//** ASYNC Actions
export const login = (data) => {
	const user = {
		username: data.username,
		password: data.password
	};

	return dispatch => {
		return fetch('api/sessions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user: user)
		})
		.then(response => response.json())
	}
}

export const loadUserGames = (id) => {
	return dispatch => {
		 fetch(`/api/users/${id}/games`)
		 .catch(error => (console.log(error)))
		.then(response => response.json())
		.then(games => dispatch(loadGames(games)))
	}
}