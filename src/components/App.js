import React from "react";
import Profile from "./Profile/Profile";
import User from "./Profile/user.json";

const App = () => (
  // React Fragment - так как для рендеринга нескольких элементов нужен общий родитель.
  <>
    <Profile user={User} />
  </>
);

export default App;
