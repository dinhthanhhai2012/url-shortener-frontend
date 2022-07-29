import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { shortHost } from 'src/constants';

const View = () => {
  const { long_url, url_key } = useSelector((state: RootState) => state.url.view);

  const shortUrl = url_key ? `${shortHost}/${url_key}` : '';

  const openUrl = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  }

  return (
    <>
      <div className={'px-8 py-6'}>
        <div className={'text-[24px]'}>Message</div>
        <div className={'flex gap-5 px-8 py-6 border border-black shadow-xl rounded-[4px]'}>
          <div className={'flex flex-col items-center justify-center gap-2.5'}>
            <QRCodeSVG value={long_url}/>
            <div className={'text-[16px] font-bold'}>Scan QR Code</div>
          </div>
          <div className={'flex flex-col justify-evenly grow'}>
            <div className={''}>
              <div className={'text-[16px] text-[#6c757d]'}>Short URL</div>
              <div
                className={'cursor-pointer text-[16px] text-[#007bff] hover:underline-offset-1'}
                onClick={() => {
                  openUrl(shortUrl);
                }}>{shortUrl || 'test data'}
              </div>
            </div>
            <div className={''}>
              <div className={'text-[16px] text-[#6c757d]'}>Origin URL</div>
              <div
                className={'cursor-pointer text-[16px] text-[#007bff] hover:underline-offset-1'}
                onClick={() => {
                  openUrl(long_url);
                }}>{long_url || 'test data'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;