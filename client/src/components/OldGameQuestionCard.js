import React from 'react';

export const OldGameQuestionCard = ({ question }) => {
	const divClassName = () => {
		if(question.correct) return 'question-card answered-correct'
		return 'question-card answered-wrong'
	}

	return (
		<div className={divClassName()}>
			<div className="row">
				<div className="col-sm-12">
					<h3>{question.question}</h3>
				</div>
			</div>
			<div className="row question-choices">
				<div className="col-md-6 col-sm-12 questions-row">
					<p className="correct-choice">{question.answer}</p>
					<p>{question.incorrect1}</p>
				</div>
				<div className="col-md-6 col-sm-12 questions-row">
					<p>{question.incorrect2}</p>
					<p>{question.incorrect3}</p>			
				</div>
			</div>
		</div>
	)
}