import { Outlet } from 'react-router-dom';
import { Navbar } from '../widgets/Navbar';
import { Footer } from '../widgets/Footer';

export function RootLayout() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="container-px py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

