import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ProfileForm from '../components/ProfileForm'
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

  const content = {
    profile:       <ProfileForm />,
    address:       <Placeholder title="Address Book" />,
    payment:       <Placeholder title="My Payment Options" />,
    returns:       <Placeholder title="My Returns" />,
    cancellations: <Placeholder title="My Cancellations" />,
    wishlist:      <Placeholder title="My WishList" />,
  }

  return (
    <div className="ap">
      <div className="ap-topbar">
        <nav className="ap-breadcrumb">
          <Link to="/home">Home</Link>
          <span>/</span>
          <span>My Account</span>
        </nav>
        <p className="ap-welcome">Welcome! <span>{MyEmail?.user_username || 'User'}</span></p>
      </div>

      <div className="ap-layout">
          <div className="row w-25">
        <Sidebar active={active} onSelect={setActive} />
         <ul className=" list-unstyled text-start ">
                    <li className="p-3"><Link to="/" className='border border-0 bg-transparent text-decoration-none  text-black  fw-bolder'>My Orders</Link> </li>
                   <li className="p-2"> <Link to="/" className='border border-0 bg-transparent text-decoration-none ms-4 text-black text-start'>My Returns</Link></li>
               <li className="p-2">    <Link to="/" className='border border-0 bg-transparent text-decoration-none ms-4 text-black text-start'>My Cancellations</Link></li> 
                   </ul> 
                   <ul  className=" list-unstyled text-start">
            <li><Link to="/" className='border border-0 bg-transparent text-decoration-none text-black text-start fw-bolder'>My WishList</Link> </li>
                   </ul></div>
        <main className="ap-content">
          {content[active]}
          
        </main>
      </div>
    </div>
  )
}