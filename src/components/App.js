import React from 'react';

import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import StatList from './StatList/StatList';
import statsData from './Statistics/statistics-data.json';

const App = () => (
  // React Fragment - так как для рендеринга нескольких элементов нужен общий родитель.
  <>
    <Profile user={user} />
    <Statistics title="Statistics title">
      <StatList stats={statsData} />
    </Statistics>
  </>
);

export default App;
