import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import CheckInForm from './CheckIn/CheckInForm';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to Hope Auto Check-In</h1>
        {/* Add your app content here */}
        < CheckInForm />
      </header>
      <Footer />
    </div>
  );
}

export default App;
