import React, { useState } from 'react'
import '../css/forthPage.css'
import { formDataStore } from '../formDataStore'
import { useNavigate } from 'react-router-dom'
function ForthPage () {
  const [formData, setFormData] = useState(formDataStore.forthForm)
  const [searchTerm, setSearchTerm] = useState('')
  const [specifiedvisaStatus, setSpecifiedvisaStatus] = useState('')
  const navigate = useNavigate()
  const handleDropdownChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }
  const handleOtherInputChange = (e) => {
    const { value } = e.target
    setSpecifiedvisaStatus(value)
  }

  const toggleDropdown = (e) => {
    const dropdownContent = e.target.nextElementSibling
    dropdownContent.classList.toggle('show')
  }

  const selectOption = (e, name, value) => {
    e.preventDefault()
    if (value === 'Other') {
      setFormData({
        ...formData,
        [name]: 'Other'
      })
      document.querySelector('.other-input').style.display = 'block'
    } else {
      handleDropdownChange(name, value)
      document.querySelector('.other-input').style.display = 'none'
      setSpecifiedvisaStatus('')
    }

    const dropdownContent = e.target.closest('.dropdown-content')
    dropdownContent.classList.remove('show')
  }

  const visaOptions = [
    'Student Visa(500)',
    'Temporary Graduate Visa(TR 485)',
    'Permanent Resident(PR)',
    'Citizen',
    'Other'
  ].filter((option) => option.toLowerCase().includes(searchTerm))


  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.checkValidity()) {
      setFormData({
        ...formData,
        visaStatus: formData.visaStatus === 'Other' && specifiedvisaStatus ? specifiedvisaStatus : formData.visaStatus
      })
      formDataStore.forthForm = formData
      console.log(formDataStore.forthForm)
      navigate('/fifthPage')
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
        <p className="visa">VISA status<span className="specialStar">*</span></p>
        <div className="dropdown">
          <button type="button" className="dropbtn" onClick={toggleDropdown}>
            {formData.visaStatus || 'Choose ▾'}
          </button>
          <div className="dropdown-content">
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {visaOptions.map((option) => (
              <a href="#" key={option} onClick={(e) => selectOption(e, 'visaStatus', option)}>{option}</a>
            ))}
          </div>
        </div>
        <input
          type="text"
          placeholder="Please specify your visa status"
          className="other-input"
          style={{ display: formData.visaStatus === 'Other' ? 'block' : 'none' }}
          value={specifiedvisaStatus}
          onChange={handleOtherInputChange}
        />
      </div>
      <div className="buttonContainer">
        <button type='submit'>Next</button>
      </div>
    </form>
  )
}

export default ForthPage