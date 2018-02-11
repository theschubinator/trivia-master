import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionCard from '../components/QuestionCard';
import { Button } from 'react-bootstrap';

class ShowQuestions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: 'All'
		}
	}
	
	handleClick = (e) => {
		this.setState({ category: e.target.name})
	};

	render() {
		if(!this.props.user.loggedIn) return <Redirect to="/" />

		const permittedQuestions = () => {
			if (!this.props.user.admin) {
				let userQuestions = this.props.questions.filter(question => question.user.username === this.props.user.username)
				return filteredQuestionsByCategory(userQuestions);
			} 
			return filteredQuestionsByCategory(this.props.questions)
		};

		const filteredQuestionsByCategory = (questions) => {
			if(this.state.category !== 'All') {
				return questions.filter(question => question.category.name === this.state.category)
			}
			return questions
		};

		const displayQuestions = permittedQuestions().map((question, i) => {
			return (
				<div className="col-md-6" key={i}>
					<QuestionCard question={question} />
				</div>
			)
		})

		return (
			<div className="row">
			<Button name="All" onClick={this.handleClick}>All</Button>
			<Button name="Sports" onClick={this.handleClick}>Sports</Button>	
			<Button name="History" onClick={this.handleClick}>History</Button>
			<Button name="Science" onClick={this.handleClick}>Science</Button>
			<Button name="Entertainment" onClick={this.handleClick}>Entertainment</Button>
				<p id="questionNote"><b>Note: </b><i>Green signifies the correct answer.</i></p>
				{displayQuestions}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps)(ShowQuestions);