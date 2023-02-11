import {createSlice} from "@reduxjs/toolkit";
import RecycleBin from '../../../src/Asset/recyclebin.png';
import LinkedIn from '../../../src/Asset/linkedin.png';
import PdfLogo from '../../../src/Asset/pdflogo.png';
import ThisPc from '../../../src/Asset/thispc.png';
import GitHub from '../../../src/Asset/github.png';

import {useSelector,useDispatch} from "react-redux";



const recycleBinListFunc = () => {
    const recycleBinList = useSelector((state) => state.isRecycle.recycleBinList);
  };



const initialState={
    
    iconData:[{icon:RecycleBin,title:"Recycle Bin"},{icon:ThisPc,title:"This PC"},{icon:PdfLogo,title:"Resume"},{icon:LinkedIn,title:"LinkedIn"},{icon:GitHub,title:"Github"}],
};

export const sortSlice = createSlice({
    name:"iconData",
    initialState,
    reducers:{
        sortByName:(state)=>{
            state.iconData=[{icon:GitHub,title:"Github"},{icon:LinkedIn,title:"LinkedIn"},{icon:RecycleBin,title:"Recycle Bin"},{icon:PdfLogo,title:"Resume"},{icon:ThisPc,title:"This PC"}];
        },

        sortBySize:(state)=>{
            state.iconData=[{icon:RecycleBin,title:"Recycle Bin"},{icon:ThisPc,title:"This PC"},{icon:PdfLogo,title:"Resume"},{icon:LinkedIn,title:"LinkedIn"},{icon:GitHub,title:"Github"}];
        },

        sortByDate:(state)=>{
            state.iconData=[{icon:ThisPc,title:"This PC"},{icon:GitHub,title:"Github"},{icon:PdfLogo,title:"Resume"},{icon:RecycleBin,title:"Recycle Bin"},{icon:LinkedIn,title:"LinkedIn"}];
        },
    }

})

export const {sortByName,sortBySize,sortByDate}=sortSlice.actions;

export default sortSlice.reducer;