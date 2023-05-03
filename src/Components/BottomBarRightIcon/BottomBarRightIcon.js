import React from 'react'
import {useState,useEffect} from 'react'

function BottomBarRightIcon(props) {


    

  const [isHover, setisHover] = useState(false);

  const mouseEnter=()=>{
    setisHover(true);
  };

  const mouseExit=()=>{
    setisHover(false);
  }



    return (
      <div  onMouseEnter={mouseEnter} onMouseLeave={mouseExit} style={{background:isHover?"rgba(255, 255, 255,0.8)":"none"}}>
        <img src={props.i} alt="home" style={{ height: "20px", padding: "7px 7px"}} />
    </div>
    )
}

export default BottomBarRightIcon