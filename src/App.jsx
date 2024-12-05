import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; 

import Page from './pages/ErrorFix/ErrorFix'; 
import ErrorFixStarter from './pages/ErrorStarter/ErrorStarter';
import DesignPage from './pages/DesignPage/DesignPage'
import DesignStarter from './pages/DesignStarter/DesignStarter';
import BackendOutputPage from './pages/Backend/Backend';
// import BackendOutputPage from './pages/Backend/Backend';
import BackendStarter from './pages/BackendStarter/BackendStarter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style-starter" element={<DesignStarter />} /> 
        <Route path="/error-fix-starter" element={<ErrorFixStarter />} /> 
        <Route path="/error-fix" element={<Page />} />
        <Route path="/design" element={< DesignPage/>} /> 
        <Route path="/backend" element={<BackendOutputPage />} />
        <Route path="/backend-starter" element={<BackendStarter />} />

      </Routes>
    </Router>
  );
}

export default App;
