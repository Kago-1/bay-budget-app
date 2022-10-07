import React from 'react'
import {NavLink} from "react-router-dom"

const linkStyles = {
  margin: "0px 30px 0px 100px",
  color: "lightblue",
  textDecoration:"none"
};

function NavBar() {
 
  return (
   
    <div className='navbar'>
       <NavLink style={linkStyles} to="/">Expenses</NavLink>
       <NavLink style={linkStyles}to="/newexpense">New Expense</NavLink>
       <NavLink style={linkStyles}to="/blog">Blog</NavLink>

            
    </div>
  )
}

export default NavBar; 