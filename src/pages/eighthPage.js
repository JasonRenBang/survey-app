import React, { useState, useEffect } from 'react'
import '../css/eighthPage.css'
import { formDataStore } from '../formDataStore'
import { useNavigate } from 'react-router-dom'
function EighthPage () {
  const [formData, setFormData] = useState(formDataStore.eighthForm)
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.checkValidity()) {
      formDataStore.eighthForm = formData
      console.log(formDataStore.eighthForm)
      navigate('/ninethPage')
    } else {
      const firstInvalidElement = e.target.querySelector(':invalid')
      if (firstInvalidElement) {
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        firstInvalidElement.focus()
      }
    }
  }
  useEffect(() => {
    const inputReasons = document.querySelectorAll('.inputReason')
    const inputContainers = document.querySelectorAll('.inputContainer')
    const errorMessages = document.querySelectorAll('.errorMessage')

    inputReasons.forEach((inputReason, index) => {
      const inputContainer = inputContainers[index]
      const errorMessage = errorMessages[index]

      function validateInput () {
        if (!inputReason.checkValidity()) {
          inputReason.classList.add('invalid')
          inputContainer.classList.add('invalid')
          errorMessage.style.display = 'block'
        } else {
          inputReason.classList.remove('invalid')
          inputContainer.classList.remove('invalid')
          errorMessage.style.display = 'none'
        }
      }

      inputReason.addEventListener('focus', () => {
        inputContainer.classList.add('active')
      })

      inputReason.addEventListener('blur', () => {
        validateInput()
      })

      inputReason.addEventListener('input', () => {
        validateInput()
      })
    })
  }, [])

  return (
    <form className="bluePrint" onSubmit={handleSubmit}>
      <div className="firstsectionBP">
        <div className="head"></div>
        <div className="title">Contact Form</div>
        <div className="information">
          <p className="emailInformation">Welcome to VicWise</p>
        </div>
        <div>
          <p className="required">* Indicates required question</p>
        </div>
      </div>

      <div className="secondsectionBP">
        <p className="Vic">VicWISE Volunteer Confirmation and Acknowledgement</p>
        <p className="title">
          Do you have Working with Children Check?<span className="specialStar">*</span>
        </p>
        <p>
          For volunteers to participate in VicWISE events, it is essential to hold a valid Working with Children Check.
          This requirement is mandatory for individuals whose volunteering responsibilities may involve direct or
          unsupervised contact with children, in compliance with legal obligations. If you need to initiate the Working
          with Children Check application process, you can access the relevant information through the following link:
          <a href="https://service.vic.gov.au/services/working-with-children">Working with Children Check
            (service.vic.gov.au)</a>
        </p>
        <p className="question">Please send your Working with Children Check to: hr@vicwise.org</p>
        <div className="answer">
          <form>
            <label>
              <input
                type="radio"
                name="workingWithChildrenCheck"
                value="Yes"
                checked={formData.workingWithChildrenCheck === 'Yes'}
                onChange={handleInputChange}
              />
              Yes, I have Working with Children Check.
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="workingWithChildrenCheck"
                value="No"
                checked={formData.workingWithChildrenCheck === 'No'}
                onChange={handleInputChange}
              />
              No, but I am applying for it.
            </label>
          </form>
        </div>
      </div>

      <div className="thirdsectionBP">
        <p className="reason">Why do you want to volunteer with VicWISE?<span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="text"
            name="reason"
            className="inputReason"
            placeholder="Your Answer"
            value={formData.reason}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>
      <div className="buttonContainer">
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default EighthPage