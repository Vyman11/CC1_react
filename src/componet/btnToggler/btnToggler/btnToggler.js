import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/themeContext'
import"./btnToggle.css";
import Navbar1 from '../../../navBar/Navbar';
export default function BtnToggler({children}) {
    const {toggleTheme,theme}=useContext(ThemeContext);
     if (theme) {
      document.body.style.backgroundColor='black'
      document.body.style.color='aliceblue'

     }
     else{
      document.body.style.backgroundColor='aliceblue'
      document.body.style.color='black'
     }
    
  return (
    <div >
        
        <div>
           <button style={{borderRadius:"100px",height:"40px",position:"fixed",right:"10px",top:"100px"}}  onClick={toggleTheme} className={theme?"btn-toggle dark-btn":"btn-toggle"}>
                 {theme ? "LIGHT" : "DARK"}
           </button>
        </div>
      
    </div>
  )
}
