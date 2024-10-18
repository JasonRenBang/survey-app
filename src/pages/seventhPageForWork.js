import React, { useState, useEffect } from 'react'
import '../css/seventhPageForWork.css'
import { formDataStore } from '../formDataStore'
import { useNavigate } from 'react-router-dom'
function SeventhPageForWork () {
  const [formData, setFormData] = useState(formDataStore.sevenThPageForWorkForm)
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
      formDataStore.sevenThPageForWorkForm = formData
      console.log(formDataStore.sevenThPageForWorkForm)
      navigate('/eighthPage')
    } else {
      const firstInvalidElement = e.target.querySelector(':invalid')
      if (firstInvalidElement) {
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        firstInvalidElement.focus()
      }
    }
  }
  useEffect(() => {
    const inputJobs = document.querySelectorAll('.inputJob')
    const inputContainers = document.querySelectorAll('.inputContainer')
    const errorMessages = document.querySelectorAll('.errorMessage')

    inputJobs.forEach((inputJob, index) => {
      const inputContainer = inputContainers[index]
      const errorMessage = errorMessages[index]

      function validateInput () {
        if (!inputJob.checkValidity()) {
          inputJob.classList.add('invalid')
          inputContainer.classList.add('invalid')
          errorMessage.style.display = 'block'
        } else {
          inputJob.classList.remove('invalid')
          inputContainer.classList.remove('invalid')
          errorMessage.style.display = 'none'
        }
      }

      inputJob.addEventListener('focus', () => {
        inputContainer.classList.add('active')
      })

      inputJob.addEventListener('blur', () => {
        validateInput()
      })

      inputJob.addEventListener('input', () => {
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
        <p className="Company" style={{ display: 'block' }}>
          Company <span className="specialStar">*</span>
          <span className="information" style={{ display: 'block', marginTop: '5px', border: 'none' }}>
            Which company do you work at currently?
          </span>
        </p>
        <div className="inputContainer">
          <input
            type="text"
            name="company"
            className="inputJob"
            placeholder="Your Answer"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="thirdsectionBP">
        <p className="job" style={{ display: 'block' }}>
          Job Title<span className="specialStar">*</span>
          <span className="information" style={{ display: 'block', marginTop: '5px', border: 'none' }}>
            e.g., Chef, Accountant, Supervisor
          </span>
        </p>
        <div className="inputContainer">
          <input
            type="text"
            name="jobTitle"
            className="inputJob"
            placeholder="Your Answer"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>
      <div className="buttonContainer">
        <button type='submit'>Next</button>
      </div>
    </form>
  )
}

export default SeventhPageForWork