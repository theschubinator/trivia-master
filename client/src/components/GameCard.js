import React from 'react';

export const GameCard = ({question}) => {
	// debugger
	return (
		<div>
			<h2>{question.question}</h2>
			<p>{question.answer}</p>
			<p>{question.incorrect1}</p>
			<p>{question.incorrect2}</p>
			<p>{question.incorrect3}</p>
		</div>
	)
}