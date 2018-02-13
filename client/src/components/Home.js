import React from 'react';
import LeaderBoard from '../components/LeaderBoard';

export const Home = (props) => {
	return (
		<div id="homePage">
			<div>
				<div>
					<h1 id="appName">Welcome to Trivia Master</h1>
				</div>
			</div>

			<div className="row">
				<div className="col-sm-8" id="homeInfo">
					<h2>What is Trivia Master</h2>
						<p>
							Trivia Master is a trivia game where users are able to compete against other users
							to see who really can be called the "Master" at Trivia. Checkout the board to the right. If you think you have what 
							it takes to become a Trivia Master sign up for an account and get mastering!
						</p>
						<p>
							Users have the option to test their trivia knowledge in the areas of Sports, History, Science, and Entertainment.
							Not sure which category to play. That's fine, just choose a game that will include questions from all categories!
						</p>
				 	<h2>Personalize Trivia Master to Your Taste...</h2>
						<p>
							The best part about Trivia Master is that you have the ability not only to play, but also to create your very own
							questions as well! These questions are added into the database, so that all users can enjoy your wonderful knowledge.
						</p>
				</div>
				<div className="col-sm-4">
					<LeaderBoard />
				</div>
			</div>
		</div>
	)
}