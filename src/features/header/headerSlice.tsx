import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imgTumska: '',
  imgKok: '',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
});

// console.log(headerSlice);

export default headerSlice.reducer;
