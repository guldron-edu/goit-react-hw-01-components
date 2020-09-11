import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.trHistory}>
      <thead>
        <tr>
          <th className={styles.topCell}>Type</th>
          <th className={styles.topCell}>Amount</th>
          <th className={styles.topCell}>Currency</th>
        </tr>
      </thead>
      {items.map(obj => (
        <tbody key={obj.id}>
          <tr>
            <td className={styles.cell}>{obj.type}</td>
            <td className={styles.cell}>{obj.amount}</td>
            <td className={styles.cell}>{obj.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;
