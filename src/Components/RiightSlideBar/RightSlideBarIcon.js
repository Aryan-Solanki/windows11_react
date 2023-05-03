import React from 'react'

function RightSlideBarIcon(props) {
  return (
    <div style={{fontSize:"12px" ,margin:"5px",height:"50px", width:"90px" ,borderRadius:"8px",padding:"10px",backgroundColor:"white"}}>
        <img src={props.img} style={{width:"20px"}} alt="" />
        <p>{props.title}</p>

    </div>
  )
}

export default RightSlideBarIcon 