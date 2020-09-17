import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleFriend.module.css";

function SingleFriend({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="80" />
      <p className={styles.name}>{name}</p>
    </>
  );
}

SingleFriend.prototype = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default SingleFriend;
