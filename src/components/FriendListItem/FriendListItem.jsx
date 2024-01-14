import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="item">
      <img
        className="friends-avatar"
        src={avatar}
        alt={name}
        width="48"
      />
      <p className="name">{name}</p>
      <p className="status">{isOnline}</p>
    </div>
  );
};
