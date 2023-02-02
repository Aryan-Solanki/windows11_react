import React,{useState,useEffect} from 'react'
import { FiGrid } from "react-icons/fi";
import { IoRefresh } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import ContextMenu from '../ContextMenu/ContextMenu';


import {useSelector,useDispatch} from "react-redux";
import {iconClicked,iconNotClicked,iconLeftClicked,iconNotLeftClicked} from "../Slices/isIconClickSlice";

function IconButton(props) {  

  const [show,setShow]=useState(false);

  
  useEffect(() => {
    const handleClick=()=>{
      dispatch(iconClicked("None"));
      setShow(false);
    }
    
    window.addEventListener("click",handleClick);
    return ()=>window.removeEventListener("click",handleClick);
  }, []);



  const customContentHeight=133;

  const [leftposition,setLeftposition]=useState(0);
  const [topposition,setTopposition]=useState(0);

  const isIconClick=useSelector((state)=>state.isIconClick.isIconClick);
  const isIconLeftClick=useSelector((state)=>state.isIconClick.isIconLeftClick);
  const whichIconClick=useSelector((state)=>state.isIconClick.whichIconClick);
  // whichIconClick
  const dispatch=useDispatch();
  

  const [isHover, setisHover] = useState(false);

  const mouseEnter=()=>{
    setisHover(true);
  };

  const mouseExit=()=>{
    setisHover(false);
  }

const iconStyle={
    background:"transparent",
    borderColor:"transparent",
    }

const iconImageStyle={
height:"60px",
}

const  textStyle={
    margin:"0px",
    color:"white",
    fontSize:"13px",
    textAlign:"center",
    textShadow:"2px 2px 3px black",
}

const LeftClicked=()=>{
  if(isIconLeftClick===true){
    dispatch(iconNotLeftClicked);
  }
  else{
    dispatch(iconLeftClicked);
  }
  
}


const customContent=(e)=>{
  e.preventDefault();
  setShow(true);
  dispatch(iconClicked(props.filename));
  const {pageX,pageY}=e;
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
const contextItem=[{title:"View",icon:FiGrid,arrow:true}]

  return (
    <>
      <div onClick={LeftClicked} onContextMenu={customContent} style={{border:isIconLeftClick?"solid red 1px":"None" ,marginBottom:"25px",paddingBottom:"6px",width:"80px",display:"flex",alignItems:"center",zIndex:0,flexDirection:"column",background:(isHover||(whichIconClick===props.filename&&isIconClick))?"rgba(255, 255, 255,0.2)":"none",}} onMouseEnter={mouseEnter} onMouseLeave={mouseExit}>
          <button style={iconStyle}><img src={props.ima} alt="imae" style={iconImageStyle}/></button>
          <p style={textStyle}>{props.filename}</p>
      </div>
      {whichIconClick===props.filename&&isIconClick&&show&&<ContextMenu x={leftposition} y={topposition} height={customContentHeight} items={contextItem}/>}
    </>
    
  )
}

export default IconButton