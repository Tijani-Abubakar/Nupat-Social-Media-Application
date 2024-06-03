import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Authentication from './components/Authentication';
import LoginModal from './components/LoginModal';


function App() {
  return (
    // <div>
    //   <Authentication />
    // </div>a


    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<LoginModal />} />
      </Routes>
    </Router>
  );
}

export default App;
