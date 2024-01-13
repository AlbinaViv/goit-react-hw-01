import { FriendListItem } from "../FriendListItem/FriendListItem";
import "./FriendList.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => {
        const statusClasses = ["status"];
        if (friend.isOnline === true) {
          statusClasses.push("online");
        } else {
          statusClasses.push("offline");
        }
        return (
          <li key={friend.id}>
            <img
              src={friend.avatar}
              alt="friend-avatar"
              width="100"
            />
            <p className="friend-name">{friend.name}</p>
            <p className={statusClasses.join(" ")}>
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
