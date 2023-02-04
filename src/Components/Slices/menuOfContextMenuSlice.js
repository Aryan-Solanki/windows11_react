import {createSlice} from "@reduxjs/toolkit";



const initialState={
    isMenuHovered:false,
    whichTileHovered:"None",
};

export const menuOfContextMenuSlice = createSlice({
    name:"isMenuHovered",
    initialState,
    reducers:{
        menuHovered:(state,action)=>{
            state.isMenuHovered=true;
            state.whichTileHovered=action.payload;

        },

        menuNotHovered:(state)=>{
            state.isMenuHovered=false;
        }

        // iconClicked:(state,action)=>{
        //     state.isIconClick=true;
        //     state.whichIconClick=action.payload;
        // },
        
    }

})

export const {menuHovered,menuNotHovered}=menuOfContextMenuSlice.actions;

export default menuOfContextMenuSlice.reducer;