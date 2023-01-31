import { configureStore } from '@reduxjs/toolkit';
import isIconClickSliceReducer from '../Components/Slices/isIconClickSlice';

export const store = configureStore({
    reducer:{
        isIconClick:isIconClickSliceReducer,
    }
})