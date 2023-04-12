import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice';
import lenguajeSlice from './slices/lenguaje.slice';


export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    spanishOrEnglish: lenguajeSlice,
	}
});