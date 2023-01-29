import React from 'react'



function ContextMenu(props) { 


    const MenuStyle={
      position:"absolute",
      filter:" blur(0)",
      
        // filter: "blur(10px) brightness(0.1)",
        
    }
    const item = ["View","Refresh","Undo Delete"];


    const itemList=item.map((i)=>{
      return <li style={{listStyle: "none",border:"solid blue 1px"}}>{i}</li>;
    });


  return (

    <> 
    <div style={{position: "absolute",height:"200px",width:"200px",background:"white",   left:props.x, top:props.y,filter: "blur(5px) saturate(2) hue-rotate(0deg)",}}>
    </div>
    <div style={MenuStyle}>
    <ul style={{paddingLeft:"20px"}}>
      {itemList}
    </ul>
  </div>
     </>

    
    
  )
}

export default ContextMenu