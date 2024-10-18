import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/firstPage.css'
import { formDataStore } from '../formDataStore'

function FirstPage () {
  const [formData, setFormData] = useState(formDataStore.firstForm)

  const navigate = useNavigate()
  useEffect(() => {
    const inputEmails = document.querySelectorAll('.inputEmail')
    const inputContainers = document.querySelectorAll('.inputContainer')
    const errorMessages = document.querySelectorAll('.errorMessage')

    inputEmails.forEach((inputEmail, index) => {
      const inputContainer = inputContainers[index]
      const errorMessage = errorMessages[index]

      function validateInput () {
        if (!inputEmail.checkValidity()) {
          inputEmail.classList.add('invalid')
          inputContainer.classList.add('invalid')
          errorMessage.style.display = 'block'
        } else {
          inputEmail.classList.remove('invalid')
          inputContainer.classList.remove('invalid')
          errorMessage.style.display = 'none'
        }
      }

      inputEmail.addEventListener('focus', () => {
        inputContainer.classList.add('active')
      })

      inputEmail.addEventListener('blur', () => {
        validateInput()
      })

      inputEmail.addEventListener('input', () => {
        validateInput()
      })
    })
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleNavigation = () => {
    navigate('/secondPage')
  }
  return (
    <div className="bluePrint">
      <div className="firstsectionBP">
        <div className="head"></div>
        <div className="title">Contact Form</div>
        <div className="information">
          <p className="emailInformation">xxx@gamil.com </p>
        </div>
        <div>
          <p className="required">* Indicates required question</p>
        </div>
      </div>
      <div className="secondsectionBP">
        <p className="email">VicWISE Email <span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="email"
            name="vicWise"
            className="inputEmail"
            placeholder="Your Answer"
            value={formData.vicWise}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>
      <div className="thirdsectionBP">
        <p className="email">Personal Email <span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="email"
            name="personalEmail"
            className="inputEmail"
            placeholder="Your Answer"
            value={formData.personalEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>
      <div className="fourthsectionBP">
        <p className="email">Phone Number <span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="tel"
            name="personalPhone"
            className="inputEmail"
            pattern="[0-9]{10}"
            placeholder="Your Answer"
            value={formData.personalPhone}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="buttonContainer">
        <button onClick={handleNavigation}>Next</button>
      </div>
    </div>
  )
}

export default FirstPage