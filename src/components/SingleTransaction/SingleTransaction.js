import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleTransaction.module.css";

function SingleTransaction({ transaction }) {
  const { type, amount, currency } = transaction;
  return (
    <>
      <td className={styles.cell}>{type}</td>
      <td className={styles.cell}>{amount}</td>
      <td className={styles.cell}>{currency}</td>
    </>
  );
}

SingleTransaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default SingleTransaction;
