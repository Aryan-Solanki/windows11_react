import './App.css';
import Imag from '../src/Asset/wallpaper.jpg';
import RecycleBin from '../src/Asset/recyclebin.png';
import LinkedIn from '../src/Asset/linkedin.png';
import PdfLogo from '../src/Asset/pdflogo.png';
import ThisPc from '../src/Asset/thispc.png';
import GitHub from '../src/Asset/github.png';
import IconButton from './Components/IconButton/IconButton.js';
import ContextMenu from './Components/ContextMenu/ContextMenu';
import { FiGrid } from "react-icons/fi";
import { IoRefresh } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";

import { useState ,useEffect} from 'react';


import {useSelector,useDispatch} from "react-redux";
import {iconClicked,iconNotClicked,iconNotLeftClicked} from "./Components/Slices/isIconClickSlice";




function App() {

  const isIconClick=useSelector((state)=>state.isIconClick.isIconClick);
  const isRefresh=useSelector((state)=>state.isRefresh.isRefresh);

  const dispatch=useDispatch();

  const contextItem=[{title:"View",icon:FiGrid,arrow:true,menuOfContextMenu:[{title:"Sorty",icon:TbArrowsSort,arrow:false},{title:"Sorjikty",icon:TbArrowsSort,arrow:false}]},{title:"Sort by",icon:TbArrowsSort,arrow:false},{title:"Refresh",icon:IoRefresh,arrow:false},];
  


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

  

  const customContentHeight=133;

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

  const iconData=[{icon:RecycleBin,title:"Recycle Bin"},{icon:ThisPc,title:"This PC"},{icon:PdfLogo,title:"Resume"},{icon:LinkedIn,title:"LinkedIn"},{icon:GitHub,title:"Github"}];
  
  const iconDataList=iconData.map((i)=>{
    return <IconButton ima={i.icon} filename={i.title}/>
  });

  return (
    <>
    <div style={{display:"flex",cursor:'default'}} onContextMenu={(e)=>{e.preventDefault();}}>
      <div style={wallpaperStyle} onContextMenu={customContent}></div>
      {isRefresh&&<div style={{display:"flex",flexDirection:"column",alignItems:"start",paddingLeft:"10px",paddingTop:"10px",zIndex:0,position:"absolute"}}>
          {iconDataList}
      </div>}
      {!isIconClick&&show&&<ContextMenu x={leftposition} y={topposition} height={customContentHeight} items={contextItem}/>}
    </div>
    </>
    
  );
}

export default App;







