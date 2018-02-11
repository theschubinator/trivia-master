import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionCard from '../components/QuestionCard';
import { Button } from 'react-bootstrap';

const showQuestions = ({user, questions}) => {
	if(!user.loggedIn) return <Redirect to="/" />
  
  const permittedQuestions = () => {
		if (!user.admin) {
			let userQuestions = questions.filter(question => question.user.username === user.username)
			return userQuestions;
		} else {
			return questions
		}
	};

	const displayQuestions = permittedQuestions().map((question, i) => {
		return (
			<div className="col-md-6" key={i}>
				<QuestionCard question={question} />
			</div>
		)
	})
	
	const handleClick = (e) => {
		alert(e.target.name)
	}

	return (
		<div className="row">
		<Button name="All" onClick={handleClick}>All</Button>
		<Button name="Sports" onClick={handleClick}>Sports</Button>	
		<Button name="History" onClick={handleClick}>History</Button>
		<Button name="Science" onClick={handleClick}>Science</Button>
		<Button name="Entertainment" onClick={handleClick}>Entertainment</Button>
			<p id="questionNote"><b>Note: </b><i>Green signifies the correct answer.</i></p>
			{displayQuestions}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps)(showQuestions);