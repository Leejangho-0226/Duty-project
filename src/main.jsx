import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 전역(global) + Tailwind 엔트리만 유지
import "./styles/base/globals.css";
import "./index.css";

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
