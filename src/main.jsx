import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import PetDetails from './pages/PetDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/pets/:id" element={<PetDetails />} /> 
      </Routes>
    </Router>
  </StrictMode>
);
