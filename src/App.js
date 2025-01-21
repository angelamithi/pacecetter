import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import RequestInfoForm from './components/RequestInfoForm';

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/request-info" element={<RequestInfoForm />} />
      </Routes>
 
  );
};

export default App;
