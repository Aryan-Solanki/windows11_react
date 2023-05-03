import React from 'react'
import RightSlideBarIcon from './RightSlideBarIcon'



import location from '../../Asset/location.png';
import saver from '../../Asset/saver.png';
import bluetooth from '../../Asset/bluetooth.png';
import nightlight from '../../Asset/nightlight.png';
import airplane from '../../Asset/airplane.png';
import nearshare from '../../Asset/nearshare.png';
import dash from '../../Asset/dash.png';
import moon from '../../Asset/moon.png';
import network from '../../Asset/network.png';
import connect from '../../Asset/connect.png';
import project from '../../Asset/project.png';
import tablet from '../../Asset/tablet.png';


function RightSlideBar() {

  const item=[{title:"Location",image:location},{title:"Batttery Saver",image:saver},{title:"Bluetooth",image:bluetooth},{title:"Night Light",image:nightlight},{title:"Airplane",image:airplane},{title:"Nearby",image:nearshare},{title:"All Settings",image:dash},{title:"Priority Only",image:moon},{title:"Network",image:network},{title:"Connect",image:connect},{title:"Project",image:project},{title:"Tablet Mode",image:tablet}]


  return (
    <div style={{position:"absolute",right:"0px",height:"100vh",width:"510px", backgroundColor: "rgba(215,231,249,0.98)"}}>

      <div style={{position:"absolute",bottom:"220px",display:"flex",justifyContent:"center",height:"100px",flexFlow: "row wrap"}}>
        {item.map((i) => {
              return <RightSlideBarIcon title={i.title} img={i.image}/>
            })}
      </div>


    </div>
  )
}

export default RightSlideBar  