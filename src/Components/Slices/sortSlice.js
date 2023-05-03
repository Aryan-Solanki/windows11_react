import {createSlice} from "@reduxjs/toolkit";
import RecycleBin from '../../../src/Asset/recyclebin.png';
import LinkedIn from '../../../src/Asset/linkedin.png';
import PdfLogo from '../../../src/Asset/pdflogo.png';
import ThisPc from '../../../src/Asset/thispc.png';
import GitHub from '../../../src/Asset/github.png';




import arrow from '../../Asset/arrow.png';
import battery from '../../Asset/battery.png';
import wifi from '../../Asset/wifi.png';
import audio from '../../Asset/audio.png';
import sidepane from '../../Asset/sidepane.png';


import home from '../../Asset/home.png';
import search from '../../Asset/search.png';
import widget from '../../Asset/widget.png';
import explorer from '../../Asset/explorer.png';
import setting from '../../Asset/settings.png';
import store from '../../Asset/store.png';
import edge from '../../Asset/edge.png';
import code from '../../Asset/code.png';

// import {useSelector,useDispatch} from "react-redux";

// const recycleBinList=useSelector((state)=>state.isRecycle.recycleBinList);


const initialState={
    
    iconData:[{icon:RecycleBin,title:"Recycle Bin"},{icon:ThisPc,title:"This PC"},{icon:PdfLogo,title:"Resume"},{icon:LinkedIn,title:"LinkedIn"},{icon:GitHub,title:"Github"}],
    bottomBarCenter:[home,search,widget,explorer,setting,store,edge,code],
    bottomBarRight:[arrow,battery,wifi,audio,sidepane],

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