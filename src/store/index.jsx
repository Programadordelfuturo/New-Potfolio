import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice';
import lenguajeSlice from './slices/lenguaje.slice';
import isDarkMode from './slices/isDarkMode.slice'


export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    spanishOrEnglish: lenguajeSlice,
    isDarkMode,
	}
});