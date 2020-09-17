import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileUserElement.module.css";

function ProfileUserElement({ name, tag, location, avatar }) {
  return (
    <div className={styles.description}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      {tag && <p className={styles.tag}>@{tag}</p>}
      <p className={styles.location}>{location}</p>
    </div>
  );
}

ProfileUserElement.defaultProps = {
  avatar: "http://placehold.it/128x128/",
  location: "planet Earth",
};

ProfileUserElement.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default ProfileUserElement;
