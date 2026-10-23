import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { MotionProvider } from './hooks/useMotion';
import { ThemeProvider } from './hooks/useTheme';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MotionProvider>
  </StrictMode>,
);
