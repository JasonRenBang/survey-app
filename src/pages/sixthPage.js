import React, { useState } from 'react'
import '../css/sixthPage.css'
import { useNavigate } from 'react-router-dom'
import { formDataStore } from '../formDataStore'

function SixthPage () {
  const [formData, setFormData] = useState(formDataStore.sixthForm)
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { value } = e.target
    setFormData({
      ...formData,
      status: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.status) {
      alert('Please select one option before proceeding.')
      return
    }

    formDataStore.sixthForm = formData
    console.log(formDataStore.sixthForm)
    if (formData.status === 'student') {
      navigate('/seventhPageForStudent')
    } else if (formData.status === 'graduate') {
      navigate('/seventhPageForGraduate')
    } else if (formData.status === 'working') {
      navigate('/seventhPageForWork')
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
        <p className="question">Are you a...... <span className="specialStar">*</span></p>
        <div className="situation">
          <form>
            <label>
              <input
                type="radio"
                name="status"
                value="student"
                checked={formData.status === 'student'}
                onChange={handleInputChange}
              />
              Student
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="status"
                value="graduate"
                checked={formData.status === 'graduate'}
                onChange={handleInputChange}
              />
              Graduate
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="status"
                value="working"
                checked={formData.status === 'working'}
                onChange={handleInputChange}
              />
              Working / Professional
            </label>
          </form>
        </div>
      </div>
      <div className="buttonContainer">
        <button type='submit'>Next</button>
      </div>
    </form>
  )
}

export default SixthPage