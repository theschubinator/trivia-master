import React from 'react';
import '../styles/game.css';

export const GameBoard = ({game}) => {
	const answers = game.results.map((result, index) => {
		const answer = result ? 'Correct' : 'Incorrect';
		return (
			<li key={index} className={ answer + 'Result' }>
				{ answer }
			</li>
		)
	})
	
	return (
		<div className="gameBoard">
			<h2>Results</h2>
			<ol>
				{ answers }
			</ol>
		</div>
	)
}