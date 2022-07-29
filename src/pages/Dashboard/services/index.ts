import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'src/services/config';

export const getUrls = createAsyncThunk(
  '/api/v1/myurls',
  async (page: number ) => {
    return axiosInstance.get('/api/v1/myurls', {params: {page}});
  }
);