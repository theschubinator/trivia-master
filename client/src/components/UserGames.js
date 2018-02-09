import React from 'react';
import { connect } from 'react-redux';
import GameResults from './GameResults';

const UserGames = ({userGames, user, history}) => {
	const gamesPlayed = user.games.length

	const displayGame = () => {
		if(gamesPlayed === 0)
			return <h4><i>You haven't played any games yet.</i></h4>
	  else 
	 		return <div id="oldGames">{viewGame}</div>
	}

	const viewGame = user.games.map((game, i) => {
		const cssClass = i % 2 === 0 ? 'game1' : 'game2'
		return <p className={`row gameHistory ${cssClass}`}><GameResults game={game} index={i} history={history} /></p>
	})

	return (
		<div id="oldGamesBoard">
			<h1>Games Played: { gamesPlayed }</h1>
			<div>
				{displayGame()}
			</div>
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