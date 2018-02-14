import React from 'react';
import { deleteQuestion } from '../actions/questions';
import '../styles/questions.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const QuestionCard = ({ question, deleteQuestion }) => {
	
	const handleClick = (e) => {
		deleteQuestion(e.target.name)
	}

	return (
		<div className=" container question-card" id={`question_${question.id}`}>

			<div className="row">
				<button name={question.id} className="delete" onClick={handleClick}>X</button>
				<Link className="editQuestion" to={`questions/${question.id}/edit`}>Edit</Link>
			</div>

			<div className="row" id="question-info">
				<div className="col-md-6 col-sm-12">
					<p className="questionUser">Created by: {question.user.username}</p>
				</div>
				<div className="col-md-6 col-sm-12">	
					<p>Category: {question.category.name}</p>
				</div>
			</div>

			<div className="row" id="question">
				<p>{question.question}</p>
			</div>

			<div className="row answer-row">
				<div className="col-md-6 col-sm-12 correct-choice">
					<p>{question.answer}</p>
				</div>
				<div className="col-md-6 col-sm-12">
					<p className="incorrect-choice">{question.incorrect1}</p>
				</div>
			</div>
			
			<div className="row answer-row">
				<div className="col-md-6 col-sm-12">
						<p className="incorrect-choice">{question.incorrect2}</p>
				</div>
				<div className="col-md-6 col-sm-12">
						<p className="incorrect-choice">{question.incorrect3}</p>
				</div>	
			</div>	
		</div>
	)
}

export default connect(null, { deleteQuestion})(QuestionCard);