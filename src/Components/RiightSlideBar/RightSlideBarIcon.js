import React from 'react'
import { useState } from 'react';


function RightSlideBarIcon(props) {

  const [clicked, setclicked] = useState(false);


  const onclick=()=>{

    if(clicked==true){
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