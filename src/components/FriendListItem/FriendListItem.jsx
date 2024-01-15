import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = clsx(css.status, {
    [css.online]: isOnline,
    [css.offline]: !isOnline,
  });
  return (
    <div className={css.wrap}>
      <img
        className={css.friendsAvatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={css.friendName}>{name}</p>

      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
