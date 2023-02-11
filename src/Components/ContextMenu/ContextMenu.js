import React,{useState} from 'react'
import { IoIosArrowForward } from "react-icons/io";


import {useSelector,useDispatch} from "react-redux";

import {menuHovered,menuNotHovered} from "../Slices/menuOfContextMenuSlice";





function MenuTile(props) {

  const isMenuHovered=useSelector((state)=>state.isMenuHovered.isMenuHovered);
  const whichTileHovered=useSelector((state)=>state.isMenuHovered.whichTileHovered);

  const dispatch=useDispatch();

  

  const [isHover, setIsHover] = useState(false);

  


  const handleMouseEnter = () => {
      setIsHover(true);
      // menuHovered(props.i.title);
  };
  const handleMouseLeave = () => {

      setIsHover(false);
      // menuNotHovered();
  };
  
  const MenuTileStyle={
    zIndex:0,
    padding:"0px 10px",
    display:"flex",
    height:"40px",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:"5px",
  }

  const HoverMenuTileStyle={
    zIndex:0,
    padding:"0px 10px",
    display:"flex",
    height:"40px",
    alignItems:"center",
    justifyContent:"space-between",
    background:"rgba(255, 255, 255,0.05)",
    borderRadius:"5px",
  }



  return (
    <div style={isHover?HoverMenuTileStyle:MenuTileStyle}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={props.i.func}>
        <div style={{display:"flex",alignItems:"end"}}>
          {props.i.iconImage&&<img src={props.i.ima} alt="imae" style={{height:25,paddingRight:"17px",}}/>}
          {props.i.menuOfContextMenuIcon&&<props.i.icon size={23} style={{paddingTop:"1px",paddingRight:"17px",color:"rgba(255, 255, 255,0.65)"}}/>}
          <li style={{listStyle: "none",fontWeight:"normal",letterSpacing:"0.3px",fontSize:"16px"}}>{props.i.title}</li>
        </div>
        <div>
          {props.i.arrow&&<IoIosArrowForward style={{color:"rgba(255, 255, 255,0.7)"}}/>}
          {props.i.rightText&&<li style={{listStyle: "none",color:"rgba(255, 255, 255,0.65)",fontWeight:"normal",paddingRight:"20px",letterSpacing:"0.3px",fontSize:"13px"}}>{props.i.rightTextValue}</li>}
          {props.i.arrow&&isHover&&<ContextMenu x={((props.x+400+190)>window.innerWidth)?-190:370} y={props.y+143+10>window.innerHeight?-10:props.i.posYContextMenu} height={143} width={props.contextOfContextMenuWidth} items={props.i.menuOfContextMenu}/>}
        </div>
    </div>
    
  )
}




function ContextMenu(props) { 


    

    const MenuStyle={
      zIndex:1,
      border:"solid rgba(85,85,85,0.6) 1px",
      position: "absolute",
      height:props.height,
      width:props.width,
      background:"rgba(0,0,0,0.56)",
      backdropFilter:" blur(70px) saturate(100%)",
      left:props.x,
      top:props.y,
      borderRadius:"8px",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    }  
  
   
    const itemList=props.items.map((i)=>{
      return <MenuTile i={i} x={props.x} y={props.y} contextOfContextMenuWidth={i.contextOfContextMenuWidth}/>
    });



// remove vertical padding from ul
  return (

    <> 
    
    <div onContextMenu={(e)=>{e.preventDefault();}}>
      <div style={MenuStyle} ></div>
      <div style={{paddingTop:"13px",paddingLeft:"10px",color:"white",left:props.x,top:props.y,position:"absolute",zIndex:1,fontSize:"15px",width:props.width-20}}>

        {itemList}
      </div>
    </div>
      
    </>

    
    
  )
}

export default ContextMenu


