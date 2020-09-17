import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileStatsElement.module.css";

function ProfileStatsElement({ title, value }) {
  return (
    <>
      <span className={styles.label}>{title}</span>
      <span className={styles.quantity}>{value}</span>
    </>
  );
}

ProfileStatsElement.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default ProfileStatsElement;
