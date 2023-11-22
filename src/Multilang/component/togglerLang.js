import React, { useContext } from 'react'
import franc from "../assest/france.svg"
import engh from "../assest/united-kingdom.svg"
import spain from "../assest/spain.svg"
import { LangContext } from '../context/context'
import "../../navBar/Navbar"
export default function TogglerLang() {
    const {setLang}=useContext(LangContext);
  return (
    <div style={{display:"flex"}}>
       <img    onClick={() => setLang('FR')} src={franc}/>
        <img onClick={() => setLang('EN')} src={engh}/>
        <img  onClick={() => setLang('ES')} src={spain}/>
    </div>
  )
}
