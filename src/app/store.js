import { configureStore } from '@reduxjs/toolkit';
import isIconClickSliceReducer from '../Components/Slices/isIconClickSlice';
import refreshSlice from '../Components/Slices/refreshSlice';

export const store = configureStore({
    reducer:{
        isIconClick:isIconClickSliceReducer,
        isRefresh:refreshSlice,
    }
})