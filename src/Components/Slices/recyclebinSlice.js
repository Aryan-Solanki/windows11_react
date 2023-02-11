import {createSlice} from "@reduxjs/toolkit";



const initialState={
    recycleBinList:[],
    permanentDeletedList:[],
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
        },
        permanentDelete:(state)=>{
            state.permanentDeletedList=[...state.recycleBinList];
            state.recycleBinList=[];
        }
        
    }

})

export const {addToRecycleBin,emptyRecycleBin,permanentDelete}=recyclebinSlice.actions;

export default recyclebinSlice.reducer;