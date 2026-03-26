import { Link } from 'react-router-dom';
import { safeExternalHref } from '../shared/lib/safeExternalHref';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/70 bg-white/60 dark:border-slate-800/70 dark:bg-slate-950/40">
      <div className="container-px py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">BRIKIEN LABS</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Build. Break. Innovate. We build modern websites, develop software solutions, and work on blockchain
              technologies like Hyperledger Fabric.
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">Pages</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  to="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">Contact</div>
            <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Email:{' '}
              <a className="underline" href={safeExternalHref('mailto:hello@brikienlabs.com')}>
                brikien.labs@gmail.com
              </a>
              <div>Website: <a className="underline" href={safeExternalHref('https://brikienlabs.tech')}>brikienlabs.tech</a></div>

              <div>Location: India</div>

            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-xs text-slate-500 dark:border-slate-800/70 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© {year} BRIKIEN LABS. All rights reserved.</div>
          <div className="flex gap-4">
            
          </div>
        </div>
      </div>
    </footer>
  );
}

