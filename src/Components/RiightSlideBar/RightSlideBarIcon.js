import React from 'react'
import { useState } from 'react';
import { onNightMode, offNightMode } from "../../Components/Slices/isIconClickSlice";


import { useSelector, useDispatch } from "react-redux";

function RightSlideBarIcon(props) {

  const dispatch = useDispatch();

  const [clicked, setclicked] = useState(false);

  

  const isNightMode = useSelector((state) => state.isIconClick.isNightMode);


  const onclick=()=>{

    if(props.title==="Night Light"){

      if(isNightMode){
        dispatch(offNightMode());
      }
      else{
        dispatch(onNightMode());
      }

    }

    if(clicked===true){
      setclicked(false);
    }
    else{
      setclicked(true);
    }
  }

  return (
    <div onClick={onclick} style={{fontSize:"12px" ,color:clicked?"white":"black",margin:"5px",height:"50px", width:"90px" ,borderRadius:"8px",padding:"10px",backgroundColor:clicked?"#005aff":"white"}}>
        <img src={clicked?props.white:props.img} style={{width:"20px"}} alt="" />
        <p>{props.title}</p>

    </div>
  )
}

export default RightSlideBarIcon 