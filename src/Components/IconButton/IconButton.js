import React,{useState,useEffect} from 'react'
import { FiGrid } from "react-icons/fi";
import { IoRefresh } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

import ContextMenu from '../ContextMenu/ContextMenu';

import FilledRecycleBin from '../../../src/Asset/recyclebinfilled.png';


import {useSelector,useDispatch} from "react-redux";
import {iconClicked,iconNotClicked,iconLeftClicked,iconNotLeftClicked} from "../Slices/isIconClickSlice";
import { addToRecycleBin ,emptyRecycleBin} from '../Slices/recyclebinSlice';

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
  const customContentWidth=380;

  const [leftposition,setLeftposition]=useState(0);
  const [topposition,setTopposition]=useState(0); 

  const isIconClick=useSelector((state)=>state.isIconClick.isIconClick);
  const isIconLeftClicked=useSelector((state)=>state.isIconClick.isIconLeftClicked);
  const whichIconClick=useSelector((state)=>state.isIconClick.whichIconClick);
  const whichIconLeftClick=useSelector((state)=>state.isIconClick.whichIconLeftClick);

  const iconImageHeight=useSelector((state)=>state.iconsize.iconsize.iconImageHeight);
  const iconDivHeight=useSelector((state)=>state.iconsize.iconsize.iconDivHeight);

  const recycleBinList=useSelector((state)=>state.isRecycle.recycleBinList);


  


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



const  textStyle={
    margin:"0px",
    color:"white",
    fontSize:"13px",
    textAlign:"center",
    textShadow:"2px 2px 3px black",
}

const LeftClicked=()=>{
    dispatch(iconLeftClicked(props.filename));
}


const customContent=(e)=>{
  e.preventDefault();
  setShow(true);
  dispatch(iconNotLeftClicked());
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

const addRecycleBin=()=>{
  dispatch(addToRecycleBin(props.filename));
}

const contextItem=[{title:"Open",rightText:true,rightTextValue:"Enter",iconImage:true,ima:props.ima,arrow:false,menuOfContextMenuIcon:false},{title:"Delete",icon:RiDeleteBin5Line,arrow:false,menuOfContextMenuIcon:true,func:addRecycleBin}];
  
  return (
    <>
      <div style={{visibility:recycleBinList.includes(props.filename)?"hidden":"visible"}}>
        <div onClick={LeftClicked} onContextMenu={customContent} style={{height:iconDivHeight,width:iconDivHeight,cursor:"alias",border:(whichIconLeftClick===props.filename&&isIconLeftClicked)?"dotted white 1px":"None" ,marginBottom:"12px",marginTop:"12px",paddingBottom:"6px",display:"flex",alignItems:"center",zIndex:0,flexDirection:"column",background:(isHover||(whichIconClick===props.filename&&isIconClick))?"rgba(255, 255, 255,0.2)":"none",}} onMouseEnter={mouseEnter} onMouseLeave={mouseExit}>
            <button style={iconStyle}><img src={props.filename==="Recycle Bin"&&recycleBinList.length>0?FilledRecycleBin:props.ima} alt="imae" style={{height:iconImageHeight}}/></button>
            <p style={textStyle}>{props.filename}</p>
        </div>
        {whichIconClick===props.filename&&isIconClick&&show&&<ContextMenu x={leftposition} y={topposition} height={customContentHeight} width={customContentWidth} items={contextItem}/>}
      </div>
    </>
    
  )
}

export default IconButton


