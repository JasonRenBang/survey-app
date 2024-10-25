import React, { useState, useEffect } from 'react'
import '../css/seventhPageForStudent.css'
import { formDataStore } from '../formDataStore'
import { useNavigate } from 'react-router-dom'
function SeventhPageForStudent () {
  const [formData, setFormData] = useState(formDataStore.sevenThPageForStudentForm)
  const [specifieduniversity, setSpecifieduniversity] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleOtherInputChange = (e) => {
    const { value } = e.target
    setSpecifieduniversity(value)
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.checkValidity()) {
      setFormData({
        ...formData,
        university: formData.university === 'Other' && specifieduniversity ? specifieduniversity : formData.university
      })

      formDataStore.sevenThPageForStudentForm = formData
      console.log(formDataStore.sevenThPageForStudentForm)
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
    const inputCourses = document.querySelectorAll('.inputCourse')
    const inputContainers = document.querySelectorAll('.inputContainer')
    const errorMessages = document.querySelectorAll('.errorMessage')

    inputCourses.forEach((inputCourse, index) => {
      const inputContainer = inputContainers[index]
      const errorMessage = errorMessages[index]

      function validateInput () {
        if (!inputCourse.checkValidity()) {
          inputCourse.classList.add('invalid')
          inputContainer.classList.add('invalid')
          errorMessage.style.display = 'block'
        } else {
          inputCourse.classList.remove('invalid')
          inputContainer.classList.remove('invalid')
          errorMessage.style.display = 'none'
        }
      }

      inputCourse.addEventListener('focus', () => {
        inputContainer.classList.add('active')
      })

      inputCourse.addEventListener('blur', () => {
        validateInput()
      })

      inputCourse.addEventListener('input', () => {
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
    if (value === 'Other') {
      setFormData({
        ...formData,
        [name]: 'Other'
      })
      document.querySelector('.other-input').style.display = 'block'
    } else {
      handleDropdownChange(name, value)
      document.querySelector('.other-input').style.display = 'none'
      setSpecifieduniversity('')
    }

    const dropdownContent = e.target.closest('.dropdown-content')
    dropdownContent.classList.remove('show')
  }

  const universities = [
    'Other',
    'Academies Australasia Polytechnic',
    'ACU (Australian Catholic University Limited)',
    'AIT (Academy of Interactive Technology)',
    'ATMC (Australian Technical and Management)',
    'ATMC - University of Sunshine Coast',
    'Box Hill Institute',
    'Cambridge International College',
    'CIC Higher Education (Cambridge International College) - Melbourne',
    'Chisholm Institute',
    'CQUniversity Australia',
    'Deakin University',
    'Deakin Business School',
    'Federation University Australia',
    'Holmesglen Institute Melbourne',
    'Kangan Institute',
    'Kaplan Business School Melbourne',
    'La Trobe University',
    'Leo Cussen Centre for Law',
    'Melbourne College of Advanced Education',
    'Melbourne Business School',
    'Melbourne Language Centre',
    'Milcom Institute',
    'Melbourne Free Education',
    'MIT (Melbourne Institute of Technology)',
    'Monash College',
    'Monash University',
    'Orange International College',
    'Ozford College - Melbourne',
    'RMIT - Foundation Studies',
    'RMIT University (Royal Melbourne Institute of Technology)',
    'Stott\'s College',
    'Swinburne University of Technology',
    'Trinity College Foundation Studies',
    'Torrens University Australia',
    'University College - Melbourne Residential College',
    'University of Divinity',
    'University of Melbourne',
    'Upskilled - RTO',
    'Victoria Graduate School of Business',
    'Victoria University',
  ].filter((option) => option.toLowerCase().includes(searchTerm))

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
        <p className="student">Student</p>
        <p className="currentUniversity">Current University</p>
        <div className="dropdown">
          <button type="button" className="dropbtn" onClick={toggleDropdown}>
            {formData.university || 'Choose ▾'}
          </button>
          <div className="dropdown-content">
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {universities.map((option) => (
              <a href="#" key={option} onClick={(e) => selectOption(e, 'university', option)}>{option}</a>
            ))}
          </div>
        </div>
        <input
          type="text"
          placeholder="Please specify your University"
          className="other-input"
          style={{ display: formData.university === 'Other' ? 'block' : 'none' }}
          value={specifieduniversity}
          onChange={handleOtherInputChange}
        />
      </div>

      <div className="thirdsectionBP">
        <p className="academic">Academic Level <span className="specialStar">*</span></p>
        <div className="situation">
          <form>
            {['Advanced Diploma', 'Associate Degree', 'Bachelor Degree', 'Bachelor Degree and Honours', 'Certificate IV', 'Diploma', 'Graduate Certificate', 'Graduate Diploma', "Master's Degree", 'PhD'].map((level) => (
              <label key={level} style={{ display: 'block' }}>
                <input
                  type="radio"
                  name="academicLevel"
                  value={level}
                  checked={formData.academicLevel === level}
                  onChange={handleInputChange}
                />
                {level}
              </label>
            ))}
            <label style={{ display: 'block' }}>
              <input
                type="radio"
                name="academicLevel"
                value="Other"
                checked={formData.academicLevel === 'Other'}
                onChange={handleInputChange}
              />
              Other:
              {formData.academicLevel === 'Other' && (
                <input
                  type="text"
                  className="inputOther"
                  name="otherAcademicLevel"
                  placeholder="Your Answer"
                  onChange={handleInputChange}
                />
              )}
            </label>
          </form>
        </div>
      </div>

      <div className="fourthsectionBP">
        <p className="course" style={{ display: 'inline-block' }}>
          Course <span className="specialStar">*</span>
          <span className="information" style={{ display: 'inline-block', marginTop: '5px', border: "none" }}>
            E.g., Business, IT (Information Technology), Computer Science, Accounting...
          </span>
        </p>
        <div className="inputContainer">
          <input
            type="text"
            name="course"
            className="inputCourse"
            placeholder="Your Answer"
            value={formData.course}
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

export default SeventhPageForStudent