import React from 'react';
// @ts-ignore
import Logo from 'src/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'src/constants';

const TopNav = () => {
  const navigator = useNavigate();

  const navigateToHome = () => {
    navigator(routePath.HOME);
  }

  const navigateToDashboard = () => {
    navigator(routePath.DASHBOARD);
  }

  return (
    <div className={'flex px-4 py-2 bg-[#343A40]'}>
      <div className={'flex items-center gap-2 cursor-pointer'} onClick={navigateToHome}>
        <img className={'w-[35px] h-[35px]'} src={Logo} alt="logo"/>
        <div className={'text-white text-[20px] select-none'}>URL Short</div>
      </div>

      <div className={'flex items-center ml-8'}>
        <div className={'text-white text-[20px] cursor-pointer select-none'} onClick={navigateToDashboard}>Dashboard</div>
      </div>
    </div>
  );
};

export default TopNav;