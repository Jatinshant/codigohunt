import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Optimize initial render
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

// Use concurrent features for better performance
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Mark app as loaded for performance tracking
window.addEventListener('load', () => {
  document.body.classList.add('app-loaded');
  
  // Optional: Report performance metrics
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    console.log('FCP Performance:', {
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
    });
  }
});
