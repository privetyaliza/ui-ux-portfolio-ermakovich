import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global Styles
import './styles/index.css';
import './styles/components.css'; 

// Import Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import HarvestProject from './pages/HarvestProject';
import UniWasteProject from './pages/UniWasteProject';
import ScrollManager from './components/layout/ScrollManager';

function App() {
  return (
    <Router>
      <ScrollManager />
      
      <Header />
      
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harvest" element={<HarvestProject />} />
          <Route path="/uniwaste" element={<UniWasteProject />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;