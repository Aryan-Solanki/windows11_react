// import React,{useState,useEffect} from 'react';
import './App.css';
import Imag from '../src/Asset/wallpaper.jpg';
import RecycleBin from '../src/Asset/recyclebin.png';
import LinkedIn from '../src/Asset/linkedin.png';
import PdfLogo from '../src/Asset/pdflogo.png';
import ThisPc from '../src/Asset/thispc.png';
import GitHub from '../src/Asset/github.png';
import IconButton from './Components/IconButton.js';
import ContextMenu from './Components/ContextMenu';
import { useState ,useEffect} from 'react';




function App() {


  const wallpaperStyle={
    height: "100vh",
    backgroundImage: `url('${Imag}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }


  const [show,setShow]=useState(false);
  const [position,setPosition]=useState({y:0,x:0});

  useEffect(() => {
    const handleClick=()=>setShow(false);
    window.addEventListener("click",handleClick);
    // return ()=>window.removeEventListener("click",handleClick);
  }, []);


  const customContent=(e)=>{
    e.preventDefault();
    const {pageX,pageY}=e;
    setShow(true);
    setPosition({y:pageY,x:pageX});
    }
    
  return (
    <>
    <div style={wallpaperStyle} onContextMenu={customContent}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"start",paddingLeft:"10px",paddingTop:"10px"}}>
        <IconButton ima={RecycleBin} filename={"Recycle Bin"}/>
        <IconButton ima={ThisPc} filename={"This PC"}/>
        <IconButton ima={PdfLogo} filename={"Resume"}/>
        <IconButton ima={LinkedIn} filename={"LinkedIn"}/>
        <IconButton ima={GitHub} filename={"Github"}/>
      </div>
      {show&&<ContextMenu x={position.x} y={position.y}/>}
    
    </div>
    </>
    
  );
}

export default App;







