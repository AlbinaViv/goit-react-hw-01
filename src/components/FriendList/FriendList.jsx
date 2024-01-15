import clsx from "clsx";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ isOnline, id, avatar, name }) => {
        return (
          <li
            className={css.friendDiscription}
            key={id}
          >
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
