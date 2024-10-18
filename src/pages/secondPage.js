import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/secondPage.css'
import { formDataStore } from '../formDataStore'


function SecondPage () {
  const [formData, setFormData] = useState(formDataStore.secondForm)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleDropdownChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }


  useEffect(() => {
    const inputNames = document.querySelectorAll('.inputName')
    const inputContainers = document.querySelectorAll('.inputContainer')
    const errorMessages = document.querySelectorAll('.errorMessage')

    inputNames.forEach((inputName, index) => {
      const inputContainer = inputContainers[index]
      const errorMessage = errorMessages[index]

      function validateInput () {
        if (!inputName.checkValidity()) {
          inputName.classList.add('invalid')
          inputContainer.classList.add('invalid')
          errorMessage.style.display = 'block'
        } else {
          inputName.classList.remove('invalid')
          inputContainer.classList.remove('invalid')
          errorMessage.style.display = 'none'
        }
      }

      inputName.addEventListener('focus', () => {
        inputContainer.classList.add('active')
      })

      inputName.addEventListener('blur', () => {
        validateInput()
      })

      inputName.addEventListener('input', () => {
        validateInput()
      })
    })
  }, [])

  const toggleDropdown = (e) => {
    const dropdownContent = e.target.nextElementSibling
    dropdownContent.classList.toggle('show')
  }

  const selectOption = (e, name, value) => {
    e.preventDefault()
    handleDropdownChange(name, value)
    const dropdownContent = e.target.closest('.dropdown-content')
    dropdownContent.classList.remove('show')
  }
  const genderOptions = ['Male', 'Female', 'Other'].filter((option) =>
    option.toLowerCase().includes(searchTerm)
  )

  const pronounOptions = ['He/Him', 'She/Her', 'They/Them', 'Rather Not Say', 'Other'].filter((option) =>
    option.toLowerCase().includes(searchTerm)
  )


  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.checkValidity()) {
      formDataStore.secondForm = formData
      console.log(formDataStore.secondForm)
      navigate('/thirdPage')
    } else {
      const firstInvalidElement = e.target.querySelector(':invalid')
      if (firstInvalidElement) {
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        firstInvalidElement.focus()
      }
    }
  }
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
        <p className="name">Full Name<span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="text"
            name="fullName"
            className="inputName"
            placeholder="Your Answer"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="thirdsectionBP">
        <p className="name">First Name<span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="text"
            name="firstName"
            className="inputName"
            placeholder="Your Answer"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="fourthsectionBP">
        <p className="reminder">If you do not have a middle/Last name, please put 'NA'</p>
      </div>

      <div className="fifthsectionBP">
        <p className="name">Middle Name</p>
        <div className="inputContainer">
          <input
            type="text"
            name="middleName"
            className="inputName"
            placeholder="Your Answer"
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="sixthsectionBP">
        <p className="name">Last Name / Family Name<span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="text"
            name="lastName"
            className="inputName"
            placeholder="Your Answer"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="seventhsectionBP">
        <p className="name">Preferred Name<span className="specialStar">*</span></p>
        <p>A preferred name is the name someone likes to be called, and making it easier to address them.</p>
        <div className="inputContainer">
          <input
            type="text"
            name="preferredName"
            className="inputName"
            placeholder="Your Answer"
            value={formData.preferredName}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="eighthsectionBP">
        <p className="gender">Gender</p>
        <div className="dropdown">
          <button type="button" className="dropbtn" onClick={toggleDropdown}>
            {formData.gender || 'Choose ▾'}
          </button>
          <div className="myDropdown dropdown-content">
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {genderOptions.map((option) => (
              <a href="#" key={option} onClick={(e) => selectOption(e, 'gender', option)}>{option}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="ninethsectionBP">
        <p className="pronouns">Pronouns</p>
        <div className="dropdown">
          <button type="button" className="dropbtn" onClick={toggleDropdown}>
            {formData.pronouns || 'Choose ▾'}
          </button>
          <div className="myDropdown dropdown-content">
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {pronounOptions.map((option) => (
              <a href="#" key={option} onClick={(e) => selectOption(e, 'pronouns', option)}>{option}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="buttonContainer">
        <button type='submit'>Next</button>
      </div>

    </form>
  )
}

export default SecondPage