import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={name}
          width="150"
          className={css.hiroAvatar}
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statslist}>
        <li className={css.statsColomn}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.statsColomn}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li className={css.statsColomn}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
