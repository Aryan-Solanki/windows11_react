import React from 'react'
import {useState,useEffect} from 'react'

function BottomBarCenterIcon(props) {


    

  const [isHover, setisHover] = useState(false);

  const mouseEnter=()=>{
    setisHover(true);
  };

  const mouseExit=()=>{
    setisHover(false);
  }



    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseExit} style={{background:isHover?"rgba(255, 255, 255,0.8)":"none"}}>
            <img src={props.i} alt="home" style={{ height: "30px", padding: "7px 10px" }} />
        </div>
    )
}

export default BottomBarCenterIcon