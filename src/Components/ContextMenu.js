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
    <div style={{border:"solid rgba(85,85,85,0.4) 1px",position: "absolute",height:"200px",width:"200px",background:"rgba(0,0,0,0.6)",backdropFilter:" blur(20px) saturate(100%)",   left:props.x, top:props.y}}>
    </div>
   
    
    {/* <div style={MenuStyle}>
    <ul style={{paddingLeft:"20px"}}>
      {itemList}
    </ul>
  </div> */}
     </>

    
    
  )
}

export default ContextMenu