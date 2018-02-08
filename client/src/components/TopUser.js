import React from 'react';

const TopUser = ({user, category, index}) => {
 	const cssClass = index % 2 === 0 ? 'row topUser user1' : 'row topUser user2'

	return (
		<div className={cssClass}>
			<div className="col-sm-6">
				<p>{index+1}.{user.username} </p>
			</div>
			<div className="col-sm-2">
				<p>{user[category]}%</p>
			</div>
		</div>
	)
}

export default TopUser;