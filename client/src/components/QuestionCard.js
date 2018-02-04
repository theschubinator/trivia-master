import React from 'react';

export const QuestionCard = (question) => {
	const q = question.question
	return (
		<div>
			<h3>{q.question}</h3>
			<p>{q.answer}</p>
			<p>{q.incorrect1}</p>
			<p>{q.incorrect2}</p>
			<p>{q.incorrect3}</p>
			<p>{q.category.name}</p>
		</div>
	)
}