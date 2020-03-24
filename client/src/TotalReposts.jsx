import React from 'react';
import UserReposts from './UserReposts.jsx';
import repost from '../dist/images/repost.png';

function TotalReposts(props) {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerImage"><img src={repost} className="headerIcon" /> </div>
        <div className="headerTitle">{props.total} Reposts</div>
        <div className="headerMore">View all</div>
      </div>

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