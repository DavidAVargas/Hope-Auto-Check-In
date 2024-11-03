import React from 'react';
import './SubmitForm.css';

function SubmitForm({ formData }) {
  return (
    <div className="submit-container">
      <h2>Submitted Information</h2>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
      <p><strong>Been to Hospital Recently:</strong> {formData.hospital}</p>
      {formData.hospital === 'yes' && (
        <p><strong>Hospital Name:</strong> {formData.hospitalName}</p>
      )}
      <p><strong>Feeling Pain:</strong> {formData.pain}</p>
      {formData.pain === 'yes' && (
        <p><strong>Pain Level:</strong> {formData.painLevel}</p>
      )}
      <p><strong>Changes to Medication:</strong> {formData.medication}</p>
      {formData.medication === 'yes' && (
        <p><strong>Medication Info:</strong> {formData.medicationInfo}</p>
      )}
      <p><strong>Signs of Depression:</strong> {formData.depression}</p>
    </div>
  );
}

export default SubmitForm;