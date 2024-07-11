const FriendListItem = ({ friend }) => {
  const { avatar, name, id, isOnline } = friend;
  return (
    <li className="item">
      <span className="status"></span>
      <img src={avatar} alt="User avatar" className="avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
