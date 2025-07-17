import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Breadcrumb from './components/Home/Breadcrumb';
import HomePage from './pages/HomePage';
import JourneyPlanner from './pages/JourneyPlannerPage';
import ARProductConfigurator from './pages/ARProductConfiguratorPage';
import PostPurchaseDashboard from './pages/PostPurchaseDashboard';
import Community from './pages/Community';
import Navigation from './pages/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-white font-['Poppins']">

        <Breadcrumb />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey-planner" element={<JourneyPlanner />} />
          <Route path="/ar-product-configurator" element={<ARProductConfigurator />} />
          <Route path="/post-purchase-dashboard" element={<PostPurchaseDashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/navigation" element={<Navigation />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;