import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/App.css';
import MainNav from './components/MainNavigation';
import LoginReg from './components/LoginReg';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/Login';
import DocumentUpload from './components/Upload';
import Download from './components/Download';
import VerifyAccount from './components/VerifyAccount';
import SignOut from './components/SignOut';
import ForgotPassword from './components/ForgotPassword';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Routes>
          <Route path="/" element={<LoginReg />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/VerifyAccount" element={<VerifyAccount />} />
          <Route path="/Upload" element={<DocumentUpload />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/SignOut" element={<SignOut />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

