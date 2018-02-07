import React from 'react';

export const GameResults = ({game}) => {
	const results = game.results.filter(result => result.correct === true).length
	return (
		<p>{results}/10 Correct</p>
	)
}