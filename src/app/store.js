import { configureStore } from '@reduxjs/toolkit';
import isIconClickSliceReducer from '../Components/Slices/isIconClickSlice';
import refreshSlice from '../Components/Slices/refreshSlice';
import menuOfContextMenuSlice from '../Components/Slices/menuOfContextMenuSlice';

export const store = configureStore({
    reducer:{
        isIconClick:isIconClickSliceReducer,
        isRefresh:refreshSlice,
        isMenuHovered:menuOfContextMenuSlice,
    }
})