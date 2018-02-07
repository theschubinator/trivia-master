import React from 'react';

export const OldGameQuestionCard = ({ question }) => {
	const divClassName = () => {
		if(question.correct) return 'questionCard answeredCorrect'
		return 'questionCard answeredWrong'
	}

	return (
		<div className={divClassName()}>
			<h3>{question.question}</h3>
				<p className="correctChoice">{question.answer}</p>
				<p>{question.incorrect1}</p>
				<p>{question.incorrect2}</p>
				<p>{question.incorrect3}</p>			
		</div>
	)
}