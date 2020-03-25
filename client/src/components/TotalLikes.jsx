import React from 'react';
import UserLikes from './UserLikes.jsx';

function TotalLikes(props) {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerImage"><img src="https://audibly-sb-media.s3-us-west-1.amazonaws.com/icons/heart.png" className="headerIcon" /> </div>
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