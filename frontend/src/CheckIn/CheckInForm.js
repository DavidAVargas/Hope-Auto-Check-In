import React, { useState } from 'react';
import './CheckInForm.css';

function CheckInForm() {
  const [formData, setFormData] = useState({
    hospital: '',
    hospitalName: '',
    pain: '',
    painLevel: '',
    medication: '',
    medicationInfo: '',
    depression: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div className="container">
      <h1>Hope Cancer Care of Nevada Auto Check-In</h1>
      <p>Created by David Vargas, Medical Assistant</p>
      <form id="checkInForm">
        <label>Have you been to the hospital recently?</label><br />
        <input type="radio" name="hospital" value="yes" onChange={handleChange} /> Yes
        <input type="radio" name="hospital" value="no" onChange={handleChange} /> No<br />
        {formData.hospital === 'yes' && (
          <div>
            <label>If yes, please specify the hospital:</label><br />
            <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} /><br />
          </div>
        )}

        <label>Are you feeling any pain today from a scale of 0 to 10?</label><br />
        <input type="radio" name="pain" value="yes" onChange={handleChange} /> Yes
        <input type="radio" name="pain" value="no" onChange={handleChange} /> No<br />
        {formData.pain === 'yes' && (
          <div>
            <label>If yes, please specify the pain level (0-10):</label><br />
            <input type="number" name="painLevel" min="0" max="10" value={formData.painLevel} onChange={handleChange} /><br />
          </div>
        )}

        <label>Any changes to medication or new allergies?</label><br />
        <input type="radio" name="medication" value="yes" onChange={handleChange} /> Yes
        <input type="radio" name="medication" value="no" onChange={handleChange} /> No<br />
        {formData.medication === 'yes' && (
          <div>
            <label>If yes, please provide details:</label><br />
            <textarea name="medicationInfo" rows="4" cols="50" value={formData.medicationInfo} onChange={handleChange}></textarea><br />
          </div>
        )}

        <label>Any signs of depression?</label><br />
        <input type="radio" name="depression" value="yes" onChange={handleChange} /> Yes
        <input type="radio" name="depression" value="no" onChange={handleChange} /> No<br />
      </form>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default CheckInForm;