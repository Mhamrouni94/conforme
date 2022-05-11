import React from 'react'
import './TopBar.css'
import {AiOutlineLogout} from 'react-icons/ai';  

export default function TopBar() {
  return (
    <div className='topBar'>
    <div className='topBarWrapper'>
      <div className='topLeft'>
      <span className='logo'>NomAuditeur</span>
      </div>
      <div className='topRight'> 
      <div className='topBarIcons'>
      <AiOutlineLogout /> 
          
      </div>
      </div>

    </div>  
    </div>
  )
}
