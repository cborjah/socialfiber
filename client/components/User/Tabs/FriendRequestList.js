import React from 'react';
import IndividualUser from '../../ToolBox/IndividualUser';
import FriendRequestButton from '../../ToolBox/FriendRequestButton';
import ProfilePic from '../../ToolBox/ProfilePic';


const FriendRequestList = (props) => {

  if(props.friendRequests.length) {
    const friendRequests = props.friendRequests.map((friend, idx) => {
      return (
        <li key={idx}>
          <ProfilePic userID={friend.user2_id} />
          <IndividualUser username={friend.user2_username} img={friend.img} otherID={friend.user2_id} />
          <FriendRequestButton otherID={friend.user2_id} />
        </li>
      );
    });
    return (
      <div>
        <h3>Friend Requests</h3>
        <ul>
          {friendRequests}
        </ul>
      </div>
    );
  } else {
    return null;
  }

}

export default FriendRequestList;