import {createSlice} from "@reduxjs/toolkit";



const initialState={
    isIconClick:false,
};

export const isIconClickSlice = createSlice({
    name:"onIconClick",
    initialState,
    reducers:{

        iconClicked:(state)=>{
            state.isIconClick=true;
        },
        
        iconNotClicked:(state)=>{
            state.isIconClick=false;
        }
    }

})

export const {iconClicked,iconNotClicked}=isIconClickSlice.actions;

export default isIconClickSlice.reducer;