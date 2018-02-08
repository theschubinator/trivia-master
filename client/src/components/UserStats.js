import React from 'react';
import { connect } from 'react-redux';

const UserStats = ({userGames}) => {
		let totalCorrect = 0;
		let sportsResults = {correct: 0, total: 0}
		let historyResults = {correct: 0, total: 0}
		let entertainmentResults = {correct: 0, total: 0}
		let scienceResults = {correct: 0, total: 0}

		userGames.map(game => {
			totalCorrect += game.correct
			if(game.category === 'Sports') {
				sportsResults.correct += game.correct
				sportsResults.total += 10 
			} else if (game.category === "Entertainment") {
				sportsResults.correct += game.correct
				sportsResults.total += 10 
			} else if (game.category === "Science") {
				entertainmentResults.correct += game.correct
				entertainmentResults.total += 10 

			} else if (game.category === "History") {
				scienceResults.correct += game.correct
				scienceResults.total += 10
			}
		})

	return (
		<div>
			<h1>Statistics</h1>
			<p>All: {totalCorrect/(userGames.length * 10) * 100 || 0}% Correct</p>
			<p>Sports: {(sportsResults.correct/sportsResults.total) * 100 || 0}% Correct</p>
			<p>History: {(historyResults.correct/historyResults.total) * 100 || 0}% Correct</p>
			<p>Entertainment: {(entertainmentResults.correct/entertainmentResults.total) * 100 || 0}% Correct</p>
			<p>Science: {(scienceResults.correct/scienceResults.total) * 100 || 0}% Correct</p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		userGames: state.userGames
	}
}

export default connect(mapStateToProps)(UserStats);