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

const loadGames = (games, questions) => {
	//merge question and result into one object...
	const gameData = games.map(game => {
		for(let i=0; i < 11; i++) {
			const question = questions.find(question => question.id === game.questions[i].id)
			return {...question, ...game.results[i]}
		}
	})

	return {
		type: 'LOAD_USER_GAMES',
		payload: gameData
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

export const loadUserGames = (id, questions) => {
	return dispatch => {
		 fetch(`/api/users/${id}/games`)
		 .catch(error => (console.log(error)))
		.then(response => response.json())
		.then(games => dispatch(loadGames(games, questions)))
	}
}