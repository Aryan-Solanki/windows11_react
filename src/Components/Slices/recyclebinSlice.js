import {createSlice} from "@reduxjs/toolkit";



const initialState={
    recycleBinList:[],
};

export const recyclebinSlice = createSlice({
    name:"isRecycle",
    initialState,
    reducers:{
        addToRecycleBin:(state,action)=>{
            state.recycleBinList.push(action.payload);
        },

        emptyRecycleBin:(state)=>{
            state.recycleBinList=[];
        }
        
    }

})

export const {addToRecycleBin,emptyRecycleBin}=recyclebinSlice.actions;

export default recyclebinSlice.reducer;