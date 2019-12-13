import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, children }) => (
  <section className={styles.statistics}>
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
