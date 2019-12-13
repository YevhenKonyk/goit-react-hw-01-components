import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => (
  <>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

export default FriendListItem;
