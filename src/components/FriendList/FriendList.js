import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(obj => (
        <li key={obj.id} className={styles.item}>
          <span
            className={obj.isOnline ? styles.online : styles.offline}
          ></span>
          <img
            className={styles.avatar}
            src={obj.avatar}
            alt={obj.name}
            width="80"
          />
          <p className={styles.name}>{obj.name}</p>
        </li>
      ))}
    </ul>
  );
}
// дефолт пропс в массиве объектов

FriendList.propTypes = {
  frinds: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    }).isRequired,
  ),
};

export default FriendList;
