import { createSlice } from '@reduxjs/toolkit';

export const isDarkMode = createSlice({
    name: 'isDarkMode',
    initialState: false,
    reducers: {
      setIsDarkMode: (state, action) => action.payload
    }
})

export const { setIsDarkMode } = isDarkMode.actions;

export default isDarkMode.reducer;