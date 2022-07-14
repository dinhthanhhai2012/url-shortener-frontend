import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from 'src/pages/Dashboard';
import TopNav from 'src/components/TopNav';
import { routePath } from 'src/constants';
import Home from 'src/pages/Home';

const App = () => {
  return (
    <>

      <TopNav />
      <Routes>
        <Route path={routePath.HOME} element={<Home/>}/>
        <Route path={routePath.DASHBOARD} element={<Dashboard/>}/>
        <Route path={'/view/:id'}/>
      </Routes>
    </>
  );
};

export default App;
