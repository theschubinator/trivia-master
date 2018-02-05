import React from 'react';
import '../styles/questions.css';

export const QuestionCard = (question) => {
	const q = question.question
	return (
		<div className="questionCard">
			<h3>{q.question}</h3>
			<h4>Category: {q.category.name}</h4>
				<p className="correctChoice">{q.answer}</p>
				<p className="incorrectChoice">{q.incorrect1}</p>
				<p className="incorrectChoice">{q.incorrect2}</p>
				<p className="incorrectChoice">{q.incorrect3}</p>			
		</div>
	)
}
