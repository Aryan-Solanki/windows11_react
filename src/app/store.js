import { configureStore } from '@reduxjs/toolkit';
import isIconClickSliceReducer from '../Components/Slices/isIconClickSlice';
import refreshSlice from '../Components/Slices/refreshSlice';
import menuOfContextMenuSlice from '../Components/Slices/menuOfContextMenuSlice';
import changeIconSlice from '../Components/Slices/changeIconSlice';
import sortSlice from '../Components/Slices/sortSlice';
import recyclebinSlice from '../Components/Slices/recyclebinSlice';

export const store = configureStore({
    reducer:{
        isIconClick:isIconClickSliceReducer,
        isRefresh:refreshSlice,
        isMenuHovered:menuOfContextMenuSlice,
        iconsize:changeIconSlice,
        iconData:sortSlice,
        isRecycle:recyclebinSlice,

    }
})