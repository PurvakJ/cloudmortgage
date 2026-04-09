import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Services from './pages/Services';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// Loader Component
function Loader({ onLoadingComplete }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    // Scale animation from small to large
    const scaleInterval = setInterval(() => {
      setScale(prev => {
        if (prev >= 1) {
          clearInterval(scaleInterval);
          return 1;
        }
        return Math.min(prev + 0.1, 1);
      });
    }, 100);

    // Jumping animation
    const jumpingAnimation = () => {
      const loader = document.querySelector('.loader-image');
      if (loader) {
        loader.style.animation = 'jumpAndSpin 1.5s ease-in-out infinite';
      }
    };
    jumpingAnimation();

    // Stop animation and finish loading after 3 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3000);

    return () => {
      clearInterval(scaleInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  if (!isAnimating) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <img 
          src="https://i.postimg.cc/nzjRT8BG/Screenshot_2026_04_09_at_15_47_07_removebg_preview.png" 
          alt="Loading..." 
          className="loader-image"
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
}

// ScrollToTop component to handle route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Floating buttons component
function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="floating-buttons">
          <button 
            className="floating-btn scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      <Navbar />
      <ScrollToTop />
      <main className="main-content" style={{ display: loading ? 'none' : 'block' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;