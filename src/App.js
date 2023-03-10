import './App.css';
import Imag from '../src/Asset/wallpaper.jpg';
import RecycleBin from '../src/Asset/recyclebin.png';
import LinkedIn from '../src/Asset/linkedin.png';
import PdfLogo from '../src/Asset/pdflogo.png';
import ThisPc from '../src/Asset/thispc.png';
import GitHub from '../src/Asset/github.png';
import IconButton from './Components/IconButton/IconButton.js';
import ContextMenu from './Components/ContextMenu/ContextMenu';
import { FiGrid , FiColumns } from "react-icons/fi";
import { IoRefresh } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import {iconRefreshed,iconNotRefreshed} from "./Components/Slices/refreshSlice.js";
import {smallIcon,mediumIcon,largeIcon} from "./Components/Slices/changeIconSlice";
import {sortByName,sortBySize,sortByDate} from "./Components/Slices/sortSlice";

import { useState ,useEffect} from 'react';


import {useSelector,useDispatch} from "react-redux";
import {iconClicked,iconNotClicked,iconNotLeftClicked} from "./Components/Slices/isIconClickSlice";




function App() {

  const isIconClick=useSelector((state)=>state.isIconClick.isIconClick);
  const isRefresh=useSelector((state)=>state.isRefresh.isRefresh);

  

  const dispatch=useDispatch();

  const delay = ms => new Promise(res => setTimeout(res, ms));


  
  const refreshIcon= async ()=>{
    dispatch(iconNotRefreshed());
    await delay(200);
    dispatch(iconRefreshed());
    
    
  }

  const largeIconSelected= async ()=>{
    dispatch(largeIcon());
  }

  const mediumIconSelected= async ()=>{
    dispatch(mediumIcon());
  }

  const smallIconSelected= async ()=>{
    dispatch(smallIcon());
  }

  const nameSort= async ()=>{
    dispatch(sortByName());
  }

  const sizeSort= async ()=>{
    dispatch(sortBySize());
  }

  const dateSort= async ()=>{
    dispatch(sortByDate());
  }

  const contextItem=[{title:"View",icon:FiGrid,arrow:true,posYContextMenu:13,contextOfContextMenuWidth:200,menuOfContextMenuIcon:true,menuOfContextMenu:[{title:"Large icons",menuOfContextMenuIcon:true,icon:MdCheckBoxOutlineBlank,arrow:false,func:largeIconSelected},{title:"Medium icons",menuOfContextMenuIcon:true,icon:FiColumns,arrow:false,func:mediumIconSelected},{title:"Small icons",menuOfContextMenuIcon:true,icon:FiGrid,arrow:false,func:smallIconSelected}]},{title:"Sort by",contextOfContextMenuWidth:150,icon:TbArrowsSort,arrow:true,posYContextMenu:53,menuOfContextMenuIcon:true,menuOfContextMenu:[{title:"Name",arrow:false,func:nameSort},{title:"Size",arrow:false,func:sizeSort},{title:"Date modified",arrow:false,func:dateSort}]},{title:"Refresh",menuOfContextMenuIcon:true,icon:IoRefresh,arrow:false,func:refreshIcon},];
  


  const wallpaperStyle={
    zIndex:0,
    minHeight: "100vh",
    width:"100%",
    backgroundImage: `url('${Imag}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
  }


  const [show,setShow]=useState(false);
  const [leftposition,setLeftposition]=useState(0);
  const [topposition,setTopposition]=useState(0);

  

  const customContentHeight=143;
  const customContentWidth=380;

  useEffect(() => {
    const handleClick=()=>setShow(false);
    window.addEventListener("click",handleClick);
    return ()=>window.removeEventListener("click",handleClick);
  }, []);


  const customContent=(e)=>{
      e.preventDefault();
      dispatch(iconNotLeftClicked());
      dispatch(iconNotClicked());
      const {pageX,pageY}=e;
      setShow(true);
      if(pageX>window.innerWidth-380){
        setLeftposition(pageX-380);
      }
      else{
        setLeftposition(pageX);
      }
      if(pageY>window.innerHeight-customContentHeight){
        setTopposition(pageY-customContentHeight);
      }
      else{
        setTopposition(pageY);
      }
    }
  
  const iconData=useSelector((state)=>state.iconData.iconData);

  const iconDataList=iconData.map((i)=>{
    return <IconButton ima={i.icon} filename={i.title}/>
  });

  return (
    <>
    <div style={{display:"flex",cursor:'default'}} onContextMenu={(e)=>{e.preventDefault();}}>
      <div style={wallpaperStyle} onContextMenu={customContent}></div>
      {isRefresh&&<div style={{flexFlow: "row wrap",height: "100%",flexDirection:"column",display:"flex",alignItems:"start",paddingLeft:"10px",paddingTop:"0px",zIndex:0,position:"absolute"}}>
          {iconDataList}
      </div>}
      {!isIconClick&&show&&<ContextMenu x={leftposition} y={topposition} height={customContentHeight} width={customContentWidth} items={contextItem} />}
    </div>
    </>
    
  );
}

export default App;







