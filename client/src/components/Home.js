import React from 'react';
import LeaderBoard from '../components/LeaderBoard';

export const Home = (props) => {
	return (
		<div className="row">
			<div className="col-md-12">
				<h1>Home Page</h1>
			</div>
			<div className="col-md-4">
				<LeaderBoard />
			</div>
		</div>
	)
}