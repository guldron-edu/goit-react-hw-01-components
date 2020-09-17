import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
import SingleTransaction from "../SingleTransaction/SingleTransaction";

function TransactionHistory({ transactions }) {
  return (
    <table className={styles.trHistory}>
      <thead>
        <tr>
          <th className={styles.topCell}>Type</th>
          <th className={styles.topCell}>Amount</th>
          <th className={styles.topCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <SingleTransaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
};

export default TransactionHistory;
