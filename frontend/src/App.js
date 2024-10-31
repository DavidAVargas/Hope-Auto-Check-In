import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import AdminLogin from './AdminLogin/AdminLogin';
import CheckInForm from './CheckIn/CheckInForm.js';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <header className="App-header">
              {/* <h1>Welcome to Hope Auto Check-In</h1> */}
              <CheckInForm />
            </header>
          } />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
