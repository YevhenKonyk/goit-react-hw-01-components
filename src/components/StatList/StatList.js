import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatList.module.css';

const StatList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(item => (
      <li key={item.id} className={styles.item}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.percentage}>{item.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatList;
