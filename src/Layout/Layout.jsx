import { Outlet } from "react-router-dom"
import { Header } from "../shared/Header"
import { NavBar } from "../shared/NavBar"
import { Footer } from "../shared/Footer"
import { AuthProvider } from "../Context/AuthContext"   

export const Layout = () => {
  return (
    <AuthProvider>
      <Header/>
      <NavBar/>
<div style={{paddingBottom:"170px"}}>  <Outlet /> </div>
      <Footer/>
    </AuthProvider>
  )
}