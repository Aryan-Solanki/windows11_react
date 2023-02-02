import {createSlice} from "@reduxjs/toolkit";



const initialState={
    isRefresh:true,
};

export const refreshSlice = createSlice({
    name:"isRefresh",
    initialState,
    reducers:{
        iconRefreshed:(state)=>{
            state.isRefresh=true;
        },
        iconNotRefreshed:(state)=>{
            state.isRefresh=false;
        },
        // iconRefresh:(state,action)=>{
        //     state.isIconClick=true;
        //     state.whichIconClick=action.payload;
        // },
    }

})

export const {iconRefreshed,iconNotRefreshed}=refreshSlice.actions;

export default refreshSlice.reducer;