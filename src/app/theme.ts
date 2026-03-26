function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}

export function initTheme() {
  // Apply the system theme immediately
  applyTheme(getSystemTheme());

  // Listen for OS theme changes and react automatically
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    applyTheme(e.matches ? 'dark' : 'light');
  });
}
