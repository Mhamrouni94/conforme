import React from 'react'
import Sidebar from '../topBar/SideBar'
import TopBar from '../topBar/TopBar'
import'./auditeur.css'
import Home from './Home'


function Auditeur() {
  return (
    <div className="Auditeur">
    <TopBar />
    <div className='container'>
        <Sidebar />
        <Home />
        
    </div>
    </div>
  )
}

export default Auditeur