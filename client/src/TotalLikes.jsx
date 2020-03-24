import React from 'react';
import UserLikes from './UserLikes.jsx';
import heart from '../dist/images/heart.png';

function TotalLikes(props) {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerImage"><img src={heart} className="headerIcon" /> </div>
        <div className="headerTitle">{props.total} Likes</div>
        <div className="headerMore">View all</div>
      </div>

      <div className="content">
        <div className="userContainer">
          {props.recentUserLikes.map((user, i) =>
            <UserLikes key={i} users={user} />)}
        </div>
      </div>
    </div>
  )
}

export default TotalLikes; 