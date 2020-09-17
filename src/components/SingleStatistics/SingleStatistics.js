import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleStatistics.module.css";

function SingleStatistics({ sample }) {
  const { label, percentage } = sample;
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage || 0}%</span>
    </>
  );
}

SingleStatistics.propTypes = {
  sample: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number,
  }),
};

export default SingleStatistics;
