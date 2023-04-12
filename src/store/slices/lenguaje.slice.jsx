import { createSlice } from '@reduxjs/toolkit';

export const languajeSlice = createSlice({
    name: 'spanishOrEnglish',
    initialState: true,
    reducers: {
      changeLanguaje: (state, action) => {
        return action.payload
      }
    }
})

export const { changeLanguaje } = languajeSlice.actions;

export default languajeSlice.reducer;