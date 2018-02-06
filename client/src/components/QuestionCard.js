import React from 'react';
import '../styles/questions.css';

export const QuestionCard = ({question, category}) => {
	return (
		<div className="questionCard">
			<h3>{question.question}</h3>
			<h4>Category: {category}</h4>
				<p className="correctChoice">{question.answer}</p>
				<p className="incorrectChoice">{question.incorrect1}</p>
				<p className="incorrectChoice">{question.incorrect2}</p>
				<p className="incorrectChoice">{question.incorrect3}</p>			
		</div>
	)
}
