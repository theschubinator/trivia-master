import React from 'react';

export const GameResults = ({game}) => {
	return (
		<div>
			<p>Category: {game.category}</p>
			<p>{game.correct/10 * 100}% Correct</p>
		</div>
	)
}

const sameCategories = (categories) => {
	return categories.every(name => name === categories[0])
}

