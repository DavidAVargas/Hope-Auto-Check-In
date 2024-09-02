import React, { useState } from 'react';
import './CheckInForm.css';

function CheckInForm() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const labels = {
    en: {
      title: "Hope Cancer Care of Nevada Auto Check-In",
      createdBy: "Created by David Vargas, Medical Assistant",
      hospital: "Have you been to the hospital recently?",
      pain: "Are you feeling any pain today from a scale of 0 to 10?",
      medication: "Any changes to medication or new allergies?",
      depression: "Any signs of depression?",
      yes: "Yes",
      no: "No",
      submit: "Submit",
      toggle: "Español"
    },
    es: {
      title: "Auto Check-In de Hope Cancer Care de Nevada",
      createdBy: "Creado por David Vargas, Asistente Médico",
      hospital: "¿Ha estado en el hospital recientemente?",
      pain: "¿Siente algún dolor hoy en una escala del 0 al 10?",
      medication: "¿Algún cambio en la medicación o nuevas alergias?",
      depression: "¿Algún signo de depresión?",
      yes: "Sí",
      no: "No",
      submit: "Enviar",
      toggle: "English"
    }
  };

  const formLabels = labels[language];

  return (
    <div className="container">
      <h1>{formLabels.title}</h1>
      <p>{formLabels.createdBy}</p>
      <button onClick={toggleLanguage}>{formLabels.toggle}</button>
      <form id="checkInForm">
        <label>{formLabels.hospital}</label><br />
        <input type="radio" name="hospital" value="yes" /> {formLabels.yes}
        <input type="radio" name="hospital" value="no" /> {formLabels.no}<br />

        <label>{formLabels.pain}</label><br />
        <input type="radio" name="pain" value="yes" /> {formLabels.yes}
        <input type="radio" name="pain" value="no" /> {formLabels.no}<br />

        <label>{formLabels.medication}</label><br />
        <input type="radio" name="medication" value="yes" /> {formLabels.yes}
        <input type="radio" name="medication" value="no" /> {formLabels.no}<br />

        <label>{formLabels.depression}</label><br />
        <input type="radio" name="depression" value="yes" /> {formLabels.yes}
        <input type="radio" name="depression" value="no" /> {formLabels.no}<br />
      </form>
      <button>{formLabels.submit}</button>
    </div>
  );
}

export default CheckInForm;