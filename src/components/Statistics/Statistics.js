import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import getRandomColor from "../../js/colorCanger";
import SingleStatistics from "../SingleStatistics/SingleStatistics";

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((sample) => (
          <li
            key={sample.id}
            style={{ backgroundColor: getRandomColor() }}
            className={styles.item}
          >
            <SingleStatistics sample={sample} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  stats: [
    {
      percentage: 10,
    },
  ],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
