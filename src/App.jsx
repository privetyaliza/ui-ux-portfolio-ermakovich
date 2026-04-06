import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Global Styles
import './styles/index.css';
import './styles/components.css'; 

// Import Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import HarvestProject from './pages/HarvestProject';
import UniWasteProject from './pages/UniWasteProject';
import YleVybeProject from './pages/YleVybeProject';
import ScrollManager from './components/layout/ScrollManager';


function BodyClassController() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/vybe") {
      document.body.classList.add("yle-vybe-active");
    } else {
      document.body.classList.remove("yle-vybe-active");
    }
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <BodyClassController />
      <Header />
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harvest" element={<HarvestProject />} />
          <Route path="/uniwaste" element={<UniWasteProject />} />
          <Route path="/vybe" element={<YleVybeProject />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;