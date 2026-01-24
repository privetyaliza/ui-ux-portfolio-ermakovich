// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. If there is a hash (#contact), scroll to that section
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Wait 100ms for layout to settle
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } 
    // 2. If NO hash, just snap to the top (normal navigation)
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Runs whenever path or hash changes

  return null;
}