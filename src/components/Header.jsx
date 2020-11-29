import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = (props) => {
    const logout = ()=>{
        localStorage.removeItem('token')
        props.setUser(null)
    }
    return (
        <header className="header">
            <NavLink to="/" className="home1">Home</NavLink>

            {props.user ?
                    <>
                        <span className="email">{props.user?.email}</span>
                        <span onClick={logout} className="logout">Logout</span>
                        
                        
                    </> :
                    <>
                        <NavLink to="/login" className="login1">Log in</NavLink>
                        <NavLink to="/register" className="register1">Register</NavLink>
                    </>
                    
                }
               
            
        </header>
    )
}
export default Header