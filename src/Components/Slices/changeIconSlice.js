import {createSlice} from "@reduxjs/toolkit";



const initialState={
    iconsize:{
        iconImageHeight:60,
        iconDivHeight:80,
    },
};

export const changeIconSlice = createSlice({
    name:"iconsize",
    initialState,
    reducers:{
        smallIcon:(state)=>{
            state.iconsize={
                iconImageHeight:40,
                iconDivHeight:70,
            };
        },

        mediumIcon:(state)=>{
            state.iconsize={
                iconImageHeight:60,
                iconDivHeight:80,
            };
        },


        largeIcon:(state)=>{
            state.iconsize={
                iconImageHeight:140,
                iconDivHeight:160,
            };
        },
    }

})

export const {smallIcon,mediumIcon,largeIcon}=changeIconSlice.actions;

export default changeIconSlice.reducer;