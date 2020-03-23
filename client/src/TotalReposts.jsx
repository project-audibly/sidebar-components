import React from 'react';
import UserReposts from './UserReposts.jsx';

function TotalReposts(props) {
  return (
    <div>
      <div>{props.total} Reposts</div>
      <div className="recentUsers">
        {props.recentUserReposts.map((user, i) =>
          <UserReposts key={i} users={user} />)}
      </div>
    </div>
  )
}

export default TotalReposts; 