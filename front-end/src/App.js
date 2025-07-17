import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/homePage';
import Stores from './Pages/Stores/storesPage';
import Plans from './Pages/Plans/plansPage';
import About from './Pages/AboutUs/aboutUsPage';
import Collaborators from './Pages/Collaborators/collaboratorsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<About />} />
        <Route path="/collaborators" element={<Collaborators />} />
      </Routes>
    </Router>
  );
}

export default App;
