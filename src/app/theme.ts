const STORAGE_KEY = 'brikien-theme';
type Theme = 'light' | 'dark';

function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
  localStorage.setItem(STORAGE_KEY, theme);
}

export function initTheme() {
  applyTheme(getPreferredTheme());
}

export function toggleTheme(): Theme {
  const isDark = document.documentElement.classList.contains('dark');
  const next: Theme = isDark ? 'light' : 'dark';
  applyTheme(next);
  return next;
}

