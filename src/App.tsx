import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Dashboard from 'src/pages/Dashboard';
import TopNav from 'src/components/TopNav';
import {routePath} from 'src/constants';
import Home from 'src/pages/Home';
import View from 'src/pages/View';

const App = () => {
  return (
    <>
      <TopNav/>
      <Routes>
        <Route path={routePath.HOME} element={<Home/>}/>
        <Route path={routePath.DASHBOARD} element={<Dashboard/>}/>
        <Route path={routePath.VIEW} element={<View/>}/>
      </Routes>
    </>
  );
};

export default App;
