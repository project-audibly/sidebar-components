import React from 'react';
import UserLikes from './UserLikes.jsx';

function TotalLikes(props) {
  return (
    <div>
      <div>{props.total} Likes</div>
      <div className="recentUsers">
        {props.recentUserLikes.map((user, i) =>
          <UserLikes key={i} users={user} />)}
      </div>
    </div>
  )
}

export default TotalLikes; 