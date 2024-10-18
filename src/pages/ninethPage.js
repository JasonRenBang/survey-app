import React from 'react'
import '../css/ninethPage.css'
import { formDataStore } from '../formDataStore'

function NinethPage () {
  console.log(formDataStore)
  return (
    <div className="bluePrint">
      <div className="firstsectionBP">
        <div className="head"></div>
        <div className="title">Contact Form</div>
        <p className="feedback">Your response has been recorded.</p>
      </div>
    </div>
  )
}

export default NinethPage