import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Leaderboard from './pages/Leaderboard';
import FAQ from './pages/FAQ';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2800); // Slightly longer to ensure glitch effect is visible
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Loader className={!loading ? 'loaderHidden' : ''} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
