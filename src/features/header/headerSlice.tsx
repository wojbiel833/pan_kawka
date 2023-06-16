import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imgTumska: 'https://i.ibb.co/D1cD5g9/pexels-pixabay-260922.jpg',
  imgKok: 'https://i.ibb.co/SngNG18/received-482248093749792.jpg',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
});

console.log(headerSlice);

export default headerSlice.reducer;
