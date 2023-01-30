import React,{useState} from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { IoRefresh } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";


function MenuTile(props) {

  const [isHover, setIsHover] = useState(false);


  const handleMouseEnter = () => {
      setIsHover(true);
  };
  const handleMouseLeave = () => {
      setIsHover(false);
  };
  
  const MenuTileStyle={
    padding:"0px 10px",
    display:"flex",
    height:"35px",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:"5px"
  }

  const HoverMenuTileStyle={
    padding:"0px 10px",
    display:"flex",
    height:"35px",
    alignItems:"center",
    justifyContent:"space-between",
    background:"rgba(255, 255, 255,0.05)",
    borderRadius:"5px"
  }

  return (
    <div style={isHover?HoverMenuTileStyle:MenuTileStyle}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div style={{display:"flex",alignItems:"end"}}>
          <props.i.icon size={23} style={{paddingTop:"1px",paddingRight:"17px",color:"rgba(255, 255, 255,0.65)"}}/>
          <li style={{listStyle: "none",fontWeight:"normal",letterSpacing:"0.3px",fontSize:"16px"}}>{props.i.title}</li>
        </div>
        {props.i.arrow&&<IoIosArrowForward style={{color:"rgba(255, 255, 255,0.7)"}}/>}
      </div>
  )
}



function ContextMenu(props) { 

    const MenuStyle={
      border:"solid rgba(85,85,85,0.6) 1px",
      position: "absolute",
      height:"122px",
      width:"380px",
      background:"rgba(0,0,0,0.56)",
      backdropFilter:" blur(70px) saturate(100%)",
      left:props.x,
      top:props.y,
      borderRadius:"8px",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    }  
  
    const item = [{title:"View",icon:FiGrid,arrow:true},{title:"Sort by",icon:TbArrowsSort,arrow:true},{title:"Refresh",icon:IoRefresh,arrow:false},];

 
    const itemList=item.map((i)=>{
      return <MenuTile i={i}/>
    });


  return (

    <> 
      <div style={MenuStyle}></div>
      <div style={{color:"white",left:props.x,top:props.y-8,position:"absolute",fontSize:"15px",}}>
        <ul style={{paddingLeft:"8px",paddingTop:"0px",width:"364px"}}>
          {itemList}
        </ul>
      </div>
    </>

    
    
  )
}

export default ContextMenu