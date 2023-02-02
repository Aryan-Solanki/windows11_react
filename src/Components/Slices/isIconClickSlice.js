import {createSlice} from "@reduxjs/toolkit";



const initialState={
    isIconClick:false,
    isIconLeftClicked:false,
    whichIconClick:"None",
    whichIconLeftClick:"None",
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
        },

        iconLeftClicked:(state,action)=>{
            state.isIconLeftClicked=true;
            state.whichIconLeftClick=action.payload;
        },

        iconNotLeftClicked:(state)=>{
            state.isIconLeftClicked=false;
        }
    }

})

export const {iconClicked,iconNotClicked,iconLeftClicked,iconNotLeftClicked}=isIconClickSlice.actions;

export default isIconClickSlice.reducer;