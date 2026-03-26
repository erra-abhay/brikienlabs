import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '../shared/lib/cn';
import { Button } from '../shared/ui/Button';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
] as const;

function NavItem({ to, label, end }: { to: string; label: string; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(
          'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          isActive
            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
            : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900',
        )
      }
    >
      {label}
    </NavLink>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);



  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60">
      <div className="container-px flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Brikien Labs" className="h-11 w-11 rounded-xl object-cover" />
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
              BRIKIEN LABS
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Build. Break. Innovate.</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((n) => (
            <NavItem key={n.to} to={n.to} label={n.label} end={'end' in n ? n.end : undefined} />
          ))}
        </nav>

        <div className="flex items-center gap-2">

          <Button
            className="md:hidden"
            variant="secondary"
            size="sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'md:hidden',
          open ? 'border-t border-slate-200 dark:border-slate-800' : 'hidden',
        )}
      >
        <div className="container-px flex flex-col gap-1 py-3">
          {navItems.map((n) => (
            <NavItem key={n.to} to={n.to} label={n.label} end={'end' in n ? n.end : undefined} />
          ))}
          <div className="pt-2">
            <Link to="/contact" className="block">
              <Button className="w-full" variant="primary" size="md">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

