import React from 'react';
import { connect } from 'react-redux';
import GameResults from '../components/GameResults';

const UserStatistics = ({userGames, user, history}) => {
	const gamesPlayed = userGames.length
	
	const viewGame = userGames.map(game => {
		return <li><GameResults game={game} history={history} /></li>
	})

	return (
		<div>
			<h1>Games Played: { gamesPlayed }</h1>
			<ol>
				{ viewGame }
			</ol>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		userGames: state.userGames,
		user: state.currentUser
	}
}
export default connect(mapStateToProps)(UserStatistics);