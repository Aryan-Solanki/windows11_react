import React from 'react'
import { IoIosArrowForward } from "react-icons/io";



function ContextMenu(props) { 


    const MenuStyle={
      border:"solid rgba(85,85,85,0.4) 1px",
      position: "absolute",
      height:"200px",
      width:"380px",
      background:"rgba(0,0,0,0.56)",
      backdropFilter:" blur(20px) saturate(100%)",
      left:props.x,
      top:props.y,
      borderRadius:"8px"
    }
        
  
    const item = ["View","Refresh","Undo Delete"];

 
    const itemList=item.map((i)=>{
      return <div style={{display:"flex",alignItems:"start",justifyContent:"space-between",border:"solid blue 1px"}}>
        <li style={{listStyle: "none",paddingBottom:"15px"}}>{i}</li>
        <IoIosArrowForward style={{paddingTop:"3px"}}/>
      </div>;
    });


  return (

    <> 
      <div style={MenuStyle}></div>
      <div style={{color:"white",left:props.x,top:props.y,position:"absolute",fontSize:"15px",}}>
        <ul style={{paddingLeft:"20px",width:"350px"}}>
          {itemList}
        </ul>
      </div>
    </>

    
    
  )
}

export default ContextMenu