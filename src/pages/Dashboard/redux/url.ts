import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
  data: Array<any>
  total: number,
  page: number,
  isLoading: boolean
}

const initialState: InitialState = {
  data: [],
  total: 0,
  page: 0,
  isLoading: false
};

const urlSlice = createSlice({
  name: 'urlSlice',
  initialState,
  reducers:{},
  extraReducers:{}
})

const {reducer: urlReducer} = urlSlice
export default urlReducer;