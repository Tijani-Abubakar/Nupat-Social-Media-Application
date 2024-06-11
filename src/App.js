import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Authentication from './components/Authentication';
import LoginModal from './components/LoginModal';
import PasswordRecoveryModal from './components/PasswordRecoveryModal';


function App() {
  return (
    // <div>
    //   <Authentication />
    // </div>a


    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/recovery" element={<PasswordRecoveryModal />} />
      </Routes>
    </Router>
  );
}

export default App;
