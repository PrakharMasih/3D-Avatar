import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    if (typeof window !== 'undefined') {
      handleResize();

      const debounceResize = debounce(handleResize, 200); // Debounce the resize event
      window.addEventListener('resize', debounceResize);

      return () => {
        window.removeEventListener('resize', debounceResize);
      };
    }
  }, []);

  return windowSize;
}

// Debounce helper function
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
