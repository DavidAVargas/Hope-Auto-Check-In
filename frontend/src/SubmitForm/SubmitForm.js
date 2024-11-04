import React from 'react';
import { useLocation } from 'react-router-dom';
import './SubmitForm.css';

function SubmitForm() {
  const location = useLocation();
  const { formData, formLabels } = location.state || {};

  if (!formData) {
    return (
      <div className="submit-container">
        <h2>No data submitted</h2>
        <p>Please fill out the check-in form first.</p>
      </div>
    );
  }

  return (
    <div className="submit-container">
      <h2>{formLabels.title}</h2>
      <p><strong>{formLabels.lastName}:</strong> {formData.lastName}</p>
      <p><strong>{formLabels.firstName}:</strong> {formData.firstName}</p>
      <p><strong>{formLabels.dob}:</strong> {formData.dateOfBirth}</p>
      <p><strong>{formLabels.hospital}:</strong> {formData.hospital}</p>
      {formData.hospital === 'yes' && (
        <p><strong>{formLabels.hospitalName}:</strong> {formData.hospitalName}</p>
      )}
      <p><strong>{formLabels.pain}:</strong> {formData.pain}</p>
      {formData.pain === 'yes' && (
        <p><strong>{formLabels.painLevel}:</strong> {formData.painLevel}</p>
      )}
      <p><strong>{formLabels.medication}:</strong> {formData.medication}</p>
      {formData.medication === 'yes' && (
        <p><strong>{formLabels.medicationInfo}:</strong> {formData.medicationInfo}</p>
      )}
      <p><strong>{formLabels.depression}:</strong> {formData.depression}</p>
    </div>
  );
}

export default SubmitForm;