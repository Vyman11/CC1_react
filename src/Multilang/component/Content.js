import React, { useContext } from 'react'
import { LangContext } from '../context/context'
import data from"../assest/data";
export default function Content() {
    const {lang}=useContext(LangContext)
  return (
    <div>
           <h1 className="title">{data[lang].title}</h1>
            <p className="content-txt">{data[lang].txt}</p>
      
    </div>
  )
}
