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


        // normalContextMenu:(state)=>{
        //     state.contextItem=[{title:"View",icon:FiGrid,arrow:true},{title:"Sort by",icon:TbArrowsSort,arrow:true},{title:"Refresh",icon:IoRefresh,arrow:false},];
        // },
        // iconContextMenu:(state)=>{
        //     state.contextItem=[{title:"View",icon:FiGrid,arrow:true}];
        // }
    }

})

export const {iconClicked,iconNotClicked}=isIconClickSlice.actions;

export default isIconClickSlice.reducer;