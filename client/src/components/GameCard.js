import React from 'react';
import { shuffle } from '../helpers/questions';

export const GameCard = ({question}) => {	
	const shuffledKeys = shuffle(Object.keys(question).slice(2,6))
	return (
		<div>
			<h2>{question.question}</h2>
			<p>{question[shuffledKeys[0]]}</p>
			<p>{question[shuffledKeys[1]]}</p>
			<p>{question[shuffledKeys[2]]}</p>
			<p>{question[shuffledKeys[3]]}</p>
		</div>
	)
}