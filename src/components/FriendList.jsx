import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <img
              src={friend.avatar}
              alt="friend-avatar"
              width="100"
            />
            <p class="friend-name">{friend.name}</p>
            <p class="friend-status">
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </li>
        );
      })}
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};
