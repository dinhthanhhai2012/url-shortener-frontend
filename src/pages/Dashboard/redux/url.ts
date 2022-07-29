import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUrls } from 'src/pages/Dashboard/services';

export interface ViewData {
  url_key: string,
  long_url: string,
}

interface InitialState {
  data: Array<any>
  total: number,
  page: number,
  isLoading: boolean,
  view: ViewData
}

const initialState: InitialState = {
  data: [],
  total: 0,
  page: 0,
  isLoading: false,
  view: {
    url_key: '',
    long_url: ''
  }
};

const urlSlice = createSlice({
  name: 'urlSlice',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setView: (state, action: PayloadAction<ViewData>) => {
      state.view = action.payload;
    },
  },
  extraReducers:{
    [`${getUrls.pending}`]: (state) => {
      state.isLoading = true;
    },
    [`${getUrls.fulfilled}`]: (state, action) => {
      const {data, page, total} = action.payload.data;

      state.data = data;
      state.page = page;
      state.total = total;
      state.isLoading = false;
    },
    [`${getUrls.rejected}`]: (state) => {
      state.data = initialState.data;
      state.page = initialState.page;
      state.total = initialState.total;
      state.isLoading = initialState.isLoading;
    },
  }
})

export const {setPage, setView} = urlSlice.actions;

const {reducer: urlReducer} = urlSlice
export default urlReducer;