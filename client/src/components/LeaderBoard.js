import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';
import TopUser from './TopUser';
import { Button, Well } from 'react-bootstrap';
import { findUsersStats, statsByCategory } from '../helpers/statistics';
import '../styles/leaderBoard.css';

class LeaderBoard extends Component {
	constructor() {
		super();
		this.state = {
			category: 'total'
		}
	}

	componentDidMount() {
		this.props.loadUsers()
	}

	handleClick = (e) => {
		const category = e.target.name
		this.setState({
			category: category
		})
	}

	render () {
		const { users } = this.props
		const category = this.state.category[0].toUpperCase() + this.state.category.slice(1)
		const showLeaderBoard = (category='total', u=users) => {
			const stats = findUsersStats(users)
			const topUsers = statsByCategory(category, stats).slice(0,10)
			return topUsers.map((user, i) => {
				return <TopUser key={i} user={user} category={category} index={i} />
			})
		}

		return (
			<div className='leaderBoard'>
				<h1><b>Leaderboard</b></h1>
				<div className="row">
					<h4 className="col-md-4 category"><b>Category:</b></h4>
					<p className="col-md-8 category">{category}</p>
				</div>
				<Button bsSize="xsmall" bsStyle="success" name='total' onClick={this.handleClick}>All</Button>
				<Button bsSize="xsmall" bsStyle="success" name='sports' onClick={this.handleClick}>Sports</Button>
				<Button bsSize="xsmall" bsStyle="success" name='history' onClick={this.handleClick}>History</Button>
				<Button bsSize="xsmall" bsStyle="success" name='science' onClick={this.handleClick}>Science</Button>
				<Button bsSize="xsmall" bsStyle="success" name='entertainment' onClick={this.handleClick}>Entertainment</Button>
				<Well className="leaderScores">
					{showLeaderBoard(this.state.category)}
				</Well>
				<p className="leaderboardNotice">Top 10 users are shown.</p>
			</div>
		)
	}
}

const mapStatetoProps = (state) => {
	return {
		users: state.users
	}
}

export default connect(mapStatetoProps, { loadUsers })(LeaderBoard);