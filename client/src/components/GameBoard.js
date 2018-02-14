import React from 'react';
import '../styles/game.css';

export const GameBoard = ({game}) => {
	const answers = game.results.map((result, index) => {
		const answer = result ? 'correct' : 'incorrect';
		return (
			<li key={index} className={ answer }>
				{ answer }
			</li>
		)
	})
	
	return (
		<div id="gameBoard">
			<h2>Results</h2>
			<ol>
				{ answers }
			</ol>
		</div>
	)
}