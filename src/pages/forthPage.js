import React, { useState } from 'react'
import '../css/forthPage.css'
import { formDataStore } from '../formDataStore'
function ForthPage () {
  const [formData, setFormData] = useState(formDataStore.forthForm)
  const [searchTerm, setSearchTerm] = useState('')

  const handleDropdownChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

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

  const visaOptions = [
    'Student Visa(500)',
    'Temporary Graduate Visa(TR 485)',
    'Permanent Resident(PR)',
    'Citizen',
    'Other'
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
        <p className="visa">VISA status<span className="specialStar">*</span></p>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
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
      </div>
    </div>
  )
}

export default ForthPage