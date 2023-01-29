import React from 'react'


function IconButton(props) {  

const iconStyle={
    background:"transparent",
    borderColor:"transparent",
    }

const iconImageStyle={
height:"60px",
}

const  textStyle={
    margin:"0px",
    color:"white",
    fontSize:"13px",
    textAlign:"center",
    textShadow:"2px 2px 3px black",
}
  return (
    <div style={{marginBottom:"25px"}}>
        <button style={iconStyle}><img src={props.ima} alt="imae" style={iconImageStyle}/></button>
        <p style={textStyle}>{props.filename}</p>

    </div>
    
  )
}

export default IconButton