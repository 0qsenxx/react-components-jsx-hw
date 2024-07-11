import FriendListItem from "../FriendListItem/FriendListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map((friend) => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

export default FriendsList;
