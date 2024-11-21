import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import AdminLogin from './AdminLogin/AdminLogin';
import CheckInForm from './CheckIn/CheckInForm';
import SubmitForm from './SubmitForm/SubmitForm';
import Footer from './Footer/Footer';
import { AuthProvider } from './Auth/AuthContext';
import ProtectedRoute from './Auth/ProtectedRoute';
import { CurrentUserProvider } from "./context/CurrentUser"      

function App() {
  return (
    <CurrentUserProvider>
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <header className="App-header">
                <CheckInForm />
              </header>
            } />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/submit" element={<ProtectedRoute element={<SubmitForm />} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
    </CurrentUserProvider>
  );
}

export default App;
