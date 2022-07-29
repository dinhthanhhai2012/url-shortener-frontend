import React from 'react';
import { Button, Input } from 'antd';
import { shortHost } from 'src/constants';

const Home = () => {
  return (
    <>
      <div className={'flex flex-col items-center justify-center p-8'}>
        <div
          className={'text-transparent bg-clip-text bg-gradient-to-r from-[#26ed9f] to-[#01a1f7] text-[40px] my-8'}
        >
          Let shorten your links here:
        </div>

        <div className={'mt-8'}>
          <Input.Group compact>
            <Input style={{ width: '300px' }} defaultValue="https://ant.design"/>
            <Button type="primary">Shorten</Button>
          </Input.Group>
        </div>

        <div className={'mt-8'}>
          <div className={'text-[16px] font-bold text-[#212529]'}>Custom URL (optional)</div>
          <div className={'flex text-[26px] mt-4 items-center'}>
            <div>{shortHost}/</div>
            <Input style={{ width: '300px' }} bordered={false} placeholder={'custom here'}/>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;