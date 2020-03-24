import React from 'react';
import UserReposts from './UserReposts.jsx';

function TotalReposts(props) {
  return (
    <div>
      <div>{props.total} Reposts</div>
      <div className="content">
        <div className="userContainer">
        {props.recentUserReposts.map((user, i) =>
          <UserReposts key={i} users={user} />)}
          </div>
      </div>
    </div>
  )
}

export default TotalReposts; 