import clsx from "clsx";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ isOnline, id, avatar, name }) => {
        const statusClasses = clsx(css.status, {
          [css.online]: true,
          [css.offline]: false,
        });

        // const statusClasses = ["status"];
        // if (isOnline === true) {
        //   statusClasses.push("online");
        // } else {
        //   statusClasses.push("offline");
        // }
        return (
          <li
            className="friend-list-discription"
            key={id}
          >
            <img
              src={avatar}
              alt="friend-avatar"
              width="75"
            />
            <p className="friend-name">{name}</p>
            <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
          </li>
        );
      })}
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};
