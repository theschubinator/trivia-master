import React from 'react';
import { connect } from 'react-redux';
import { GameResults } from '../components/GameResults';

const UserStatistics = ({userGames, questions, categories}) => {
	const gamesPlayed = userGames.length
	
	const viewGame = userGames.map(game => {
		return <li><GameResults game={game} /></li>
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
		questions: state.questions,
		categories: state.categories
	}
}
export default connect(mapStateToProps)(UserStatistics);