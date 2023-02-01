import {createSlice} from "@reduxjs/toolkit";



const initialState={
    isIconClick:false,
    whichIconClick:"None",
};

export const isIconClickSlice = createSlice({
    name:"isIconClick",
    initialState,
    reducers:{

        iconClicked:(state,action)=>{
            state.isIconClick=true;
            state.whichIconClick=action.payload;
        },
        
        iconNotClicked:(state)=>{
            state.isIconClick=false;
        }
    }

})

export const {iconClicked,iconNotClicked}=isIconClickSlice.actions;

export default isIconClickSlice.reducer;