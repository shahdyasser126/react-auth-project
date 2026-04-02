import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

import './AccountPage.css'
import { useAuth } from '../Context/AuthContext';

function Placeholder({ title }) {
  return (
    <div className="placeholder">
      <p>{title}</p>
    </div>
  )
}

export default function AccountPage() {
  const [active, setActive] = useState('profile')
  const { MyEmail } = useAuth();

  

  return (
    <div className="up">
      <div className="top">
        <nav className="header">
          <Link to="/home" className='text-danger bg-transparent'>Home</Link>
          <span>/</span>
          <span>My Account</span>
        </nav>
        <p className="welcome">Welcome! <span>{MyEmail?.user_username || 'User'}</span></p>
      </div>

      <div className="layout">
          <div className="row w-25">
        <Sidebar active={active} onSelect={setActive} />
       
 </div>
        
      </div>
    </div>
  )
} 