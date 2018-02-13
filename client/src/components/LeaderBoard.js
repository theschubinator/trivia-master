import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';
import TopUser from './TopUser';
import { Button, Well } from 'react-bootstrap';
import { findUsersStats, statsByCategory } from '../helpers/statistics';

class LeaderBoard extends Component {
	constructor() {
		super();
		this.state = {
			category: 'total',
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
		const { user, users } = this.props
		let currentUserRank //set below after statsByCategory() fires...
	
		const category = this.state.category[0].toUpperCase() + this.state.category.slice(1)

		const showLeaderBoard = (category='total', u=users, cu = user) => {
			const stats = findUsersStats(users)
			const userScoresByCategory = statsByCategory(category, stats)
			// Sets the stats of the current user if he is logged in...
			const currentUserRankingIndex = stats.findIndex(user => user.username === cu.username)
			currentUserRank = {...stats[currentUserRankingIndex], ranking: currentUserRankingIndex + 1 }
			//loads the top 10 users by the selected category
			const top10Users = userScoresByCategory.slice(0,10)

			return top10Users.map((user, i) => {
				return (
					<div className="col-md-12">
						<TopUser key={i} user={user} category={category} index={i} />
					</div>
				)
			})
		}

		const showCurrentUserRanking = () => {
			if(user.loggedIn) {
				return (
					<Well id="currentUserRanking">
						<div className="row">
							<div className="col-md-12">
								<p>Your current ranking is...</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-8 currentUserRanking">
								<p>{currentUserRank.ranking}. {user.username}</p>
							</div>
							<div className="col-md-4 currentUserScore">
								<p>{currentUserRank[this.state.category]}%</p>
							</div>
						</div>
					</Well>
				)
			}
		}

		return (
			<div>
				<div className='row' id="title">
					<div className="col-md-12">
						<h1><b>Leaderboard</b></h1>
					</div>
				</div>

				<div className="row" id="category">
					<h4 className="col-md-12"><b>Category:</b> <span>{category}</span></h4>
					
				</div>

				<div className="row" id="categoryBtn">
					<Button bsSize="small" bsStyle="success" name='total' onClick={this.handleClick}>All</Button>
					<Button bsSize="small" bsStyle="success" name='sports' onClick={this.handleClick}>Sports</Button>
					<Button bsSize="small" bsStyle="success" name='history' onClick={this.handleClick}>History</Button>
					<Button bsSize="small" bsStyle="success" name='science' onClick={this.handleClick}>Science</Button>
					<Button bsSize="small" bsStyle="success" name='entertainment' onClick={this.handleClick}>Entertainment</Button>
				</div>

				<div className="row leaderboardNotice">
					<p>Top 10 users are shown.</p>
				</div>

				<div className="row" id="top-users">	
					{showLeaderBoard(this.state.category)}
				</div>
				
				<div className="row" id="current-ranking">			
					{ showCurrentUserRanking() }
				</div>


			</div>
		)
	}
}

const mapStatetoProps = (state) => {
	return {
		user: state.currentUser,
		users: state.users
	}
}

export default connect(mapStatetoProps, { loadUsers })(LeaderBoard);