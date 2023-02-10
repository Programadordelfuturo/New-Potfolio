import { createSlice } from '@reduxjs/toolkit';
import { Outlet } from 'react-router-dom';

export const isLoadingSlice = createSlice({
    name: 'LoadingScreen',
    initialState: false,
    reducers: {
      setIsLoading: (state, action) => action.payload
    }
})

export const upLoadingThunk = () => event => {

  event(setIsLoading(true));
  <Outlet/>;
  event(setIsLoading(false));
}



export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;