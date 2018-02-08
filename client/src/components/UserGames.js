import React from 'react';
import { connect } from 'react-redux';
import GameResults from './GameResults';

const UserGames = ({userGames, user, history}) => {
	const gamesPlayed = user.games.length
	
	const viewGame = user.games.map(game => {
		return <li><GameResults game={game} history={history} /></li>
	})

	const displayGame = () => {
		if(gamesPlayed === 0)
			return <h4><i>You haven't played any games yet.</i></h4>
	 else { return <ol>{ viewGame }</ol> }
	}

	return (
		<div>
			<h1>Games Played: { gamesPlayed }</h1>
			{displayGame()}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		// userGames: state.userGames,
		user: state.currentUser
	}
}
export default connect(mapStateToProps)(UserGames);