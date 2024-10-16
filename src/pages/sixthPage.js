import React, { useState } from 'react'
import '../css/sixthPage.css'
import { formDataStore } from '../formDataStore'

function SixthPage () {
  const [formData, setFormData] = useState(formDataStore.sixthForm)

  const handleInputChange = (e) => {
    const { value } = e.target
    setFormData({
      ...formData,
      status: value,
    })
  }

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
    </div>
  )
}

export default SixthPage