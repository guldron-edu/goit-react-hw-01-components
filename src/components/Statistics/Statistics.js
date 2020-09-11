import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomColor from '../../js/colorCanger';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(obj => (
          <li
            key={obj.id}
            style={{ backgroundColor: getRandomColor() }}
            className={styles.item}
          >
            <span className={styles.label}>{obj.label}</span>
            <span className={styles.percentage}>{obj.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
