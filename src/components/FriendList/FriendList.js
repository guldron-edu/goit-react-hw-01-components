import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import SingleFriend from "../SingleFriend/SingleFriend";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <SingleFriend friend={friend} />
        </li>
      ))}
    </ul>
  );
}
// дефолт пропс в массиве объектов

FriendList.propTypes = {
  frinds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default FriendList;
