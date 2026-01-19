import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global Styles
import './styles/index.css'; 

// Import Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import HarvestProject from './pages/HarvestProject';

function App() {
  return (
    <Router>
      <Header />
      
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harvest" element={<HarvestProject />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;