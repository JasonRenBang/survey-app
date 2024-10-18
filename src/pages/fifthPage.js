import React, { useState, useEffect } from 'react'
import '../css/fifthPage.css'
import { formDataStore } from '../formDataStore'
import { useNavigate } from 'react-router-dom'
function FifthPage () {
  const [formData, setFormData] = useState(formDataStore.fifthForm)
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
  const handleNavigation = () => {
    navigate('/sixthPage')
  }
  useEffect(() => {
    const inputAddresses = document.querySelectorAll('.inputAddress')
    const inputContainers = document.querySelectorAll('.inputContainer')
    const errorMessages = document.querySelectorAll('.errorMessage')

    inputAddresses.forEach((inputAddress, index) => {
      const inputContainer = inputContainers[index]
      const errorMessage = errorMessages[index]

      function validateInput () {
        if (!inputAddress.checkValidity()) {
          inputAddress.classList.add('invalid')
          inputContainer.classList.add('invalid')
          errorMessage.style.display = 'block'
        } else {
          inputAddress.classList.remove('invalid')
          inputContainer.classList.remove('invalid')
          errorMessage.style.display = 'none'
        }
      }

      inputAddress.addEventListener('focus', () => {
        inputContainer.classList.add('active')
      })

      inputAddress.addEventListener('blur', () => {
        validateInput()
      })

      inputAddress.addEventListener('input', () => {
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

  const stateOptions = [
    'New South Wales',
    'Northern Territory',
    'Queensland',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia'
  ].filter((option) => option.toLowerCase().includes(searchTerm))

  return (
    <div className="bluePrint">
      <div className="firstsectionBP">
        <div className="head"></div>
        <div className="title">Contact Form</div>
        <div className="information">
          <p className="emailInformation">xxx@gamil.com</p>
        </div>
        <div>
          <p className="required">* Indicates required question</p>
        </div>
      </div>

      <div className="secondsectionBP">
        <p className="address">Address 1<span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="text"
            name="address1"
            className="inputAddress"
            placeholder="Your Answer"
            value={formData.address1}
            onChange={handleInputChange}
            required
          />
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="thirdsectionBP">
        <p className="address">Address 2 (optional)</p>
        <input
          type="text"
          name="address2"
          className="inputAddressOptional"
          placeholder="Your Answer"
          value={formData.address2}
          onChange={handleInputChange}
        />
      </div>

      <div className="fourthsectionBP">
        <p className="address">State<span className="specialStar">*</span></p>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            {formData.state || 'Choose ▾'}
          </button>
          <div className="dropdown-content">
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {stateOptions.map((option) => (
              <a href="#" key={option} onClick={(e) => selectOption(e, 'state', option)}>{option}</a>
            ))}
          </div>
        </div>
        <span className="errorMessage">* This is required input.</span>
      </div>

      <div className="fifthsectionBP">
        <p className="address">Post Code<span className="specialStar">*</span></p>
        <div className="inputContainer">
          <input
            type="text"
            name="postCode"
            className="inputAddress"
            placeholder="Your Answer"
            value={formData.postCode}
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

export default FifthPage