import React from 'react';

export const GameResults = ({game}) => {
	const gameSpecs = gameSpecsObject(game)
	return (
		<div>
			<p>Category: {gameSpecs.category}</p>
			<p>{gameSpecs.correct/10 * 100}% Correct</p>
		</div>
	)
}

const sameCategories = (categories) => {
	return categories.every(name => name === categories[0])
}

const gameSpecsObject = (game) => {
		let categories = []
		let correct = 0
		for(let i=0; i < 10; i++) {
			if (game[i].correct) correct++;
			categories.push(game[i].category.name)
			// if (categories.length > 1 && !sameCategories(categories)) {
			// 	return 'All Categories'
			// } else if(categories.length > 1 && sameCategories(categories)) { return categories[0] }
		}
		const category = findCategory(categories)
		return {category, correct}
	}

const findCategory = (categories) => {
	if (categories.every(cat => cat === categories[0])) return categories[0]
	else return 'All'
}