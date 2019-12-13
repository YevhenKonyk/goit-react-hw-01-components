import React from 'react';
import styles from './FriendList.module.css';
import FriendsListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <div className={styles.container}>
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <FriendsListItem {...friend} />
        </li>
      ))}
    </ul>
  </div>
);

export default FriendList;
