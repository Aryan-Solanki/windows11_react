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



import wlocation from '../../Asset/wlocation.png';
import wsaver from '../../Asset/wsaver.png';
import wbluetooth from '../../Asset/wbluetooth.png';
import wnightlight from '../../Asset/wnightlight.png';
import wairplane from '../../Asset/wairplane.png';
import wnearshare from '../../Asset/wnearshare.png';
import wdash from '../../Asset/wdash.png';
import wmoon from '../../Asset/wmoon.png';
import wnetwork from '../../Asset/wnetwork.png';
import wconnect from '../../Asset/wconnect.png';
import wproject from '../../Asset/wproject.png';
import wtablet from '../../Asset/wtablet.png';






function RightSlideBar() {

  const item=[{title:"Location",image:location,white:wlocation},{title:"Batttery Saver",image:saver,white:wsaver},{title:"Bluetooth",image:bluetooth,white:wbluetooth},{title:"Night Light",image:nightlight,white:wnightlight},{title:"Airplane",image:airplane,white:wairplane},{title:"Nearby",image:nearshare,white:wnearshare},{title:"All Settings",image:dash,white:wdash},{title:"Priority Only",image:moon,white:wmoon},{title:"Network",image:network,white:wnetwork},{title:"Connect",image:connect,white:wconnect},{title:"Project",image:project,white:wproject},{title:"Tablet Mode",image:tablet,white:wtablet}]


  return (
    <div style={{position:"absolute",right:"0px",height:"100vh",width:"510px", backgroundColor: "rgba(215,231,249,0.98)"}}>

      <div style={{position:"absolute",bottom:"220px",display:"flex",justifyContent:"center",height:"100px",flexFlow: "row wrap"}}>
        {item.map((i) => {
              return <RightSlideBarIcon title={i.title} img={i.image} white={i.white}/>
            })}
      </div>


    </div>
  )
}

export default RightSlideBar  