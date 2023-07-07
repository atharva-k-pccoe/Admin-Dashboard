import React from 'react'
import './topbar.css';
import {LocalPhone, WhatsApp, NearMe, Refresh} from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className='topleftcontainer'>
            <NearMe  className='nearme'/>
             Customer  Help  Shortcuts <Refresh />
          </div>
        </div>
        <div className="topRight">
            <div className='topbarIconContainer'>
                Customer Support: 
            </div>
          <div className="topbarIconContainer">
            <LocalPhone/>(+91) 9333 911 911
            
          </div>
          <div className="topbarIconContainers">
           <WhatsApp  className='whatsapp'/>(+91) 6366827420
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Topbar