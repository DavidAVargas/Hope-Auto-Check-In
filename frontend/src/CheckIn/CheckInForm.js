import React, { useState } from 'react';
import './CheckInForm.css';

function CheckInForm() {
  const [language, setLanguage] = useState('en');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [hospital, setHospital] = useState('');
  const [pain, setPain] = useState('');
  const [medication, setMedication] = useState('');
  const [depression, setDepression] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [painLevel, setPainLevel] = useState('');
  const [medicationInfo, setMedicationInfo] = useState('');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const labels = {
    en: {
      title: "Hope Cancer Care of Nevada Auto Check-In",
      createdBy: "Created by David Vargas, Former Medical Assistant",
      hospital: "Have you been to the hospital recently?",
      hospitalName: "If yes, please specify the hospital:",
      pain: "Are you feeling any pain today from a scale of 0 to 10?",
      painLevel: "If yes, please specify the pain level (0-10):",
      medication: "Any changes to medication or new allergies?",
      medicationInfo: "If yes, please provide details:",
      depression: "Any signs of depression?",
      yes: "Yes",
      no: "No",
      submit: "Submit",
      toggle: "Español"
    },
    es: {
      title: "Auto Check-In de Hope Cancer Care de Nevada",
      createdBy: "Creado por David Vargas, Ex Asistente Médico",
      hospital: "¿Ha estado en el hospital recientemente?",
      hospitalName: "Si es así, especifique el hospital:",
      pain: "¿Siente algún dolor hoy en una escala del 0 al 10?",
      painLevel: "Si es así, especifique el nivel de dolor (0-10):",
      medication: "¿Algún cambio en la medicación o nuevas alergias?",
      medicationInfo: "Si es así, proporcione detalles:",
      depression: "¿Algún signo de depresión?",
      yes: "Sí",
      no: "No",
      submit: "Enviar",
      toggle: "English"
    }
  };

  const formLabels = labels[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Form submitted successfully!");
  };

  return (
    <div className="container">
      <h1>{formLabels.title}</h1>
      <p>{formLabels.createdBy}</p>
      <button onClick={toggleLanguage}>{formLabels.toggle}</button>
      <form id="checkInForm" onSubmit={handleSubmit}>
        <label>{formLabels.hospital}</label><br />
        <input type="radio" name="hospital" value="yes" onChange={(e) => setHospital(e.target.value)} /> {formLabels.yes}
        <input type="radio" name="hospital" value="no" onChange={(e) => setHospital(e.target.value)} /> {formLabels.no}<br />
        {hospital === 'yes' && (
          <div>
            <label>{formLabels.hospitalName}</label><br />
            <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} /><br />
          </div>
        )}

        <label>{formLabels.pain}</label><br />
        <input type="radio" name="pain" value="yes" onChange={(e) => setPain(e.target.value)} /> {formLabels.yes}
        <input type="radio" name="pain" value="no" onChange={(e) => setPain(e.target.value)} /> {formLabels.no}<br />
        {pain === 'yes' && (
          <div>
            <label>{formLabels.painLevel}</label><br />
            <input type="number" min="0" max="10" value={painLevel} onChange={(e) => setPainLevel(e.target.value)} /><br />
          </div>
        )}

        <label>{formLabels.medication}</label><br />
        <input type="radio" name="medication" value="yes" onChange={(e) => setMedication(e.target.value)} /> {formLabels.yes}
        <input type="radio" name="medication" value="no" onChange={(e) => setMedication(e.target.value)} /> {formLabels.no}<br />
        {medication === 'yes' && (
          <div>
            <label>{formLabels.medicationInfo}</label><br />
            <textarea value={medicationInfo} onChange={(e) => setMedicationInfo(e.target.value)} rows="4" cols="50"></textarea><br />
          </div>
        )}

        <label>{formLabels.depression}</label><br />
        <input type="radio" name="depression" value="yes" onChange={(e) => setDepression(e.target.value)} /> {formLabels.yes}
        <input type="radio" name="depression" value="no" onChange={(e) => setDepression(e.target.value)} /> {formLabels.no}<br />

        <button type="submit">{formLabels.submit}</button>
      </form>
    </div>
  );
}

export default CheckInForm;