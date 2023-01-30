import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FiGrid } from "react-icons/fi";



function ContextMenu(props) { 


    const MenuStyle={
      border:"solid rgba(85,85,85,0.4) 1px",
      position: "absolute",
      height:"200px",
      width:"380px",
      background:"rgba(0,0,0,0.26)",
      backdropFilter:" blur(70px) saturate(100%)",
      left:props.x,
      top:props.y,
      borderRadius:"8px",
    }
        
  
    const item = ["View","Refresh","Undo Delete"];

 
    const itemList=item.map((i)=>{
      return <div style={{display:"flex",height:"30px",alignItems:"center",justifyContent:"space-between",border:"solid blue 1px",}}>
        <div style={{display:"flex",alignItems:"end"}}>
          <FiGrid size={19} style={{paddingTop:"1px",paddingRight:"10px",color:"rgba(255, 255, 255,0.5)"}}/>
          <li style={{listStyle: "none",fontWeight:"normal",letterSpacing:"0.3px",fontSize:"16px"}}>{i}</li>
        </div>
        <IoIosArrowForward style={{color:"rgba(255, 255, 255,0.5)"}}/>
        
      </div>;
    });


  return (

    <> 
      <div style={MenuStyle}></div>
      <div style={{color:"white",left:props.x,top:props.y-10,position:"absolute",fontSize:"15px",}}>
        <ul style={{paddingLeft:"20px",paddingTop:"0px",width:"350px"}}>
          {itemList}
        </ul>
      </div>
    </>

    
    
  )
}

export default ContextMenu