import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
console.log('app', user);

const App = () => (
  // React Fragment - так как для рендеринга нескольких элементов нужен общий родитель.
  <>
    <Profile user={user} />
  </>
);

export default App;
