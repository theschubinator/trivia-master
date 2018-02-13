import React from 'react';

const TopUser = ({user, category, index}) => {
 	const cssClass = index % 2 === 0 ? 'row topUser user1' : 'row topUser user2'

	return (
		<div className={cssClass}>
			<p>{index+1}.{user.username} </p>
			<p>{user[category]}%</p>
		</div>
	)
}

export default TopUser;