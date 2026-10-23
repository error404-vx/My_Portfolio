import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

interface MotionState {
  motion: boolean;
  toggle: () => void;
}

const STORAGE_KEY = 'portfolio-motion';
const MotionContext = createContext<MotionState | null>(null);

function initialMotion(): boolean {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'on' || saved === 'off') return saved === 'on';
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [motion, setMotion] = useState(initialMotion);

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
  }, [motion]);

  const toggle = useCallback(() => {
    setMotion((prev) => {
      localStorage.setItem(STORAGE_KEY, prev ? 'off' : 'on');
      return !prev;
    });
  }, []);

  const value = useMemo(() => ({ motion, toggle }), [motion, toggle]);
  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotion(): MotionState {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotion must be used inside MotionProvider');
  return ctx;
}
