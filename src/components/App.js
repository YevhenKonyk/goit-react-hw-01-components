import React from 'react';

import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import StatList from './StatList/StatList';
import statsData from './Statistics/statistics-data.json';

import FriendsList from './FriendList/FriendList';
import friendsData from './friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transationsData from './transactions.json';

const App = () => (
  // React Fragment - так как для рендеринга нескольких элементов нужен общий родитель.
  <>
    <Profile user={user} />
    <Statistics title="Statistics title">
      <StatList stats={statsData} />
    </Statistics>
    <FriendsList friends={friendsData} />
    <TransactionHistory items={transationsData} />
  </>
);

export default App;
