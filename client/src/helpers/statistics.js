export const findUsersStats = (users) => {
	let usersStats = []
	for(let i=0; i < users.length; i++) {
		const total = Math.round((users[i].total_correct/(users[i].games_played * 10) * 100) || 0)
		const entertainment = Math.round((users[i].entertainment_correct/users[i].entertainment_played) * 100) || 0
		const sports = Math.round((users[i].sports_correct/users[i].sports_played) * 100) || 0
		const science = Math.round((users[i].science_correct/users[i].science_played) * 100) || 0
		const history = Math.round((users[i].history_correct/users[i].history_played) * 100) || 0
		usersStats = usersStats.concat({ username: users[i].username, total, entertainment, sports, science, history })
	}
	return usersStats
}

export const statsByCategory = (category, stats) => {
	switch(category) {
		case 'total':
			return stats.sort((a,b) => b.total - a.total)
		case 'sports':
			return stats.sort((a,b) => b.sports - a.sports)
		case 'history':
			return stats.sort((a,b) => b.history - a.history)
		case 'entertainment':
			return stats.sort((a,b) => b.entertainment - a.entertainment)
		case 'science':
			return stats.sort((a,b) => b.science - a.science)
		default:
			break
	}
}