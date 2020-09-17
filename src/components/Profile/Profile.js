import React from "react";
import styles from "./Profile.module.css";
import ProfileStatsElement from "../ProfileStatsElement/ProfileStatsElement";
import ProfileUserElement from "../ProfileUserElement/ProfileUserElement";

export default function Profile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.profile}>
      <ProfileUserElement
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <ul className={styles.stats}>
        <li className={styles.el}>
          <ProfileStatsElement title="Followers" value={followers} />
        </li>
        <li className={styles.el}>
          <ProfileStatsElement title="Views" value={views} />
        </li>
        <li className={styles.el}>
          <ProfileStatsElement title="Likes" value={likes} />
        </li>
      </ul>
    </div>
  );
}
