import React from 'react';
import '../styles/questions.css';

export const QuestionCard = ({ question }) => {
	return (
		<div className="questionCard">
			<h3>{question.question}</h3>
			<div className="row">
				<div className="col-md-6">
					<h4 className="questionUser">Created by: {question.user.username}</h4>	
				</div>
				<div className="col-md-6">
					<h4>Category: {question.category.name}</h4>
				</div>
			</div>
			<div>
				<p className="correctChoice">{question.answer}</p>
				<p className="incorrectChoice">{question.incorrect1}</p>
				<p className="incorrectChoice">{question.incorrect2}</p>
				<p className="incorrectChoice">{question.incorrect3}</p>	
			</div>
		</div>
	)
}