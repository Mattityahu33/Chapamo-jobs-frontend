import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { HashRouter } from 'react-router-dom'; // ✅ Use HashRouter for GitHub Pages

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HashRouter>
  </StrictMode>
);
