import React from 'react';
import './App.css';
import CheckInForm from './CheckIn/CheckInForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Hope Auto Check-In</h1>
        {/* Add your app content here */}
        < CheckInForm />
      </header>
    </div>
  );
}

export default App;
