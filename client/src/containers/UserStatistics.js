import React from 'react';
import { connect } from 'react-redux';
import { GameResults } from '../components/GameResults';

const UserStatistics = (props) => {
	const gamesPlayed = props.userGames.length
	// const totalCorrect = props.userGames.results.filter(result => result.correct === true)
	const viewGame = props.userGames.map(game => {
		return <li><GameResults game={game} /></li>
	})

	return (
		<div>
			<h1>stats</h1>
			<p>Games Played: { gamesPlayed }</p>
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