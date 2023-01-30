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

  useEffect(() => {
    const handleClick=()=>setShow(false);
    window.addEventListener("click",handleClick);
    // return ()=>window.removeEventListener("click",handleClick);
  }, []);


  const customContent=(e)=>{
      e.preventDefault();
      const {pageX,pageY}=e;
      setShow(true);
      if(pageX>window.innerWidth-380){
        setLeftposition(pageX-380);
      }
      else{
        setLeftposition(pageX);
      }
      if(pageY>window.innerHeight-200){
        setTopposition(pageY-200);
      }
      else{
        setTopposition(pageY);
      }
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
      {show&&<ContextMenu x={leftposition} y={topposition}/>}
    
    </div>
    </>
    
  );
}

export default App;







