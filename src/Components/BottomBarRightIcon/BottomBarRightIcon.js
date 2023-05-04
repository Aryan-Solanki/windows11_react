import React from 'react';
import {useState,useEffect} from 'react';

import {useSelector,useDispatch } from "react-redux";

import { openSideBarr,closeSideBarr } from "../Slices/isIconClickSlice";
import sidepane from '../../Asset/sidepane.png';

function BottomBarRightIcon(props) {


    

  const [isHover, setisHover] = useState(false);

  const isSideBarOpen = useSelector((state) => state.isIconClick.isSideBarOpen);

  const dispatch = useDispatch();

  const mouseEnter=()=>{
    setisHover(true);
  };

  const mouseExit=()=>{
    setisHover(false);
  };

  const openSideBar=()=>{
    dispatch(openSideBarr());
  };

  const closeSideBar=()=>{
    dispatch(closeSideBarr());
  };



    return (
      <div  onClick={props.i===sidepane?(isSideBarOpen===true?closeSideBar:openSideBar):()=>{}}  onMouseEnter={mouseEnter} onMouseLeave={mouseExit} style={{background:isHover?"rgba(255, 255, 255,0.8)":"none"}}>
        <img src={props.i} alt="home" style={{ height: "20px", padding: "7px 7px"}} />
    </div>
    )
}

export default BottomBarRightIcon