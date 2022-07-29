import React, { useEffect } from 'react';
import { Table } from 'antd';
import { routePath, shortHost } from 'src/constants';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import axiosInstance from 'src/services/config';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { getUrls } from 'src/pages/Dashboard/services';
import { setPage, setView, ViewData } from 'src/pages/Dashboard/redux/url';
import { useNavigate } from 'react-router-dom';

// const fakeData = {
//   status: "success",
//   message: "Successfully Requested",
//   data: {
//     total: 13,
//     perPage: 5,
//     page: 1,
//     lastPage: 3,
//     data: [
//       {
//         id: 22,
//         user_id: 1,
//         url_key: "7x0Wfx",
//         is_custom: 0,
//         long_url: "https://b501-27-72-98-177.ap.ngrok.io/",
//         meta_title: "Let shorten your links here:",
//         clicks: 0,
//         ip: "127.0.0.1",
//         created_at: "2022-07-13 15:09:18",
//         updated_at: "2022-07-13 15:09:18"
//       },
//       {
//         id: 21,
//         user_id: 1,
//         url_key: "5l9pEu",
//         is_custom: 0,
//         long_url: "https://www.messenger.com/t/100007175804217",
//         meta_title: "Messenger",
//         clicks: 0,
//         ip: "127.0.0.1",
//         created_at: "2022-07-13 14:59:58",
//         updated_at: "2022-07-13 14:59:58"
//       },
//       {
//         id: 19,
//         user_id: 1,
//         url_key: "25hfsgsh",
//         is_custom: 1,
//         long_url: "https://zingnews.vn/",
//         meta_title: "Zing - Thông tin uy tín, hình ảnh ấn tượng",
//         clicks: 0,
//         ip: "127.0.0.1",
//         created_at: "2022-06-27 15:59:22",
//         updated_at: "2022-06-27 15:59:22"
//       },
//       {
//         id: 18,
//         user_id: 1,
//         url_key: "thanhhai123",
//         is_custom: 1,
//         long_url: "https://facebook.com/thanhhai.dot",
//         meta_title: "Thanh Hải",
//         clicks: 1,
//         ip: "127.0.0.1",
//         created_at: "2022-06-21 20:36:33",
//         updated_at: "2022-06-21 20:36:44"
//       },
//       {
//         id: 14,
//         user_id: 1,
//         url_key: "1415t",
//         is_custom: 1,
//         long_url: "https://www.linkedin.com/",
//         meta_title: "LinkedIn: Log In or Sign Up",
//         clicks: 0,
//         ip: "127.0.0.1",
//         created_at: "2022-06-21 17:17:36",
//         updated_at: "2022-06-21 17:17:36"
//       }
//     ]
//   }
// }

const Dashboard: React.FC = () => {
  const { data, total, page, isLoading } = useSelector((state: RootState) => state.url);

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const viewLink = async (data: ViewData) => {
    dispatch(setView(data));
    navigator(routePath.VIEW);
  };

  const deleteLink = async (id: number) => {
    try {
      await axiosInstance.delete(`/api/v1/urls/${id}`)
    } catch (error: any) {
      toast(error.message)
    }
  }

  const columnData: Array<any> = [
    {
      title: 'Short URL',
      dataIndex: 'url_key',
      key: 'url_key',
      render: (text: string) => {
        return (
          <>
            {shortHost}/{text}
          </>
        )
      }
    },
    {
      title: 'Long URL',
      dataIndex: 'long_url',
      key: 'long_url',
    }, {
      title: 'Clicks',
      dataIndex: 'clicks',
      key: 'clicks',
    }, {
      title: 'Date',
      dataIndex: 'updated_at',
      key: 'updated_at',
    }, {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      render: (text: any, record: any) => {
        return (
          <div className={'flex'}>
            <EyeOutlined className={'cursor-pointer'} onClick={() => {
              viewLink({url_key: record.url_key, long_url: record.long_url})
            }}/>
            <span> </span>
            <DeleteOutlined className={'cursor-pointer'} onClick={() => {
              deleteLink(record.id)
            }}/>
          </div>
        )
      }
    },
  ]

  const fetchData = async () => {
    dispatch(getUrls(page));
  }

  useEffect(() => {
    fetchData();
  }, [page])

  return (
    <>
      {/* cards*/}
      <div className={'flex justify-between w-full gap-2 px-4 mt-4'}>
        <div
          className={'flex flex-col p-[20px] items-center justify-center border-b border-[#2196F3] border-b-4 bg-[#E3F2FD] rounded-[0.25rem] w-[16.65%]'}>
          <div className={'text-[32px]'}>4 T+</div>
          <div className={'text-[20px]'}>Capacity</div>
        </div>
        <div
          className={'flex flex-col p-[20px] items-center justify-center border-b border-[#009688] border-b-4 bg-[#E0F2F1] rounded-[0.25rem] w-[16.65%]'}>
          <div className={'text-[32px]'}>4 T+</div>
          <div className={'text-[20px]'}>Remaining</div>
        </div>
        <div
          className={'flex flex-col p-[20px] items-center justify-center border-b border-[#3F51B5] border-b-4 bg-[#E8EAF6] rounded-[0.25rem] w-[16.65%]'}>
          <div className={'text-[32px]'}>20</div>
          <div className={'text-[20px]'}>URL Shortened</div>
        </div>
        <div
          className={'flex flex-col p-[20px] items-center justify-center border-b border-[#E91E63] border-b-4 bg-[#FCE4EC] rounded-[0.25rem] w-[16.65%]'}>
          <div className={'text-[32px]'}>12</div>
          <div className={'text-[20px]'}>Clicks & Redirects</div>
        </div>
        <div
          className={'flex flex-col p-[20px] items-center justify-center border-b border-[#4CAF50] border-b-4 bg-[#E8F5E9] rounded-[0.25rem] w-[16.65%]'}>
          <div className={'text-[32px]'}>2</div>
          <div className={'text-[20px]'}>Registered Users</div>
        </div>
        <div
          className={'flex flex-col p-[20px] items-center justify-center border-b border-[#FFC107] border-b-4 bg-[#FFF8E1] rounded-[0.25rem] w-[16.65%]'}>
          <div className={'text-[32px]'}>1</div>
          <div className={'text-[20px]'}>Guest</div>
        </div>
      </div>


      <div className={'m-4 mt-12'}>
        <Table
          dataSource={data}
          columns={columnData}
          onChange={(page) => {
            page.current && dispatch(setPage(page.current));
          }}
          pagination={{
            total: total,
            pageSize: 10,
            current: page,
            showSizeChanger: false,
            showLessItems: true,
          }}
          loading={isLoading}
        />
      </div>
    </>
  );
};

export default Dashboard;