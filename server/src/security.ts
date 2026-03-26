import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import type { RequestHandler } from 'express';
import { env } from './env.js';

export function securityMiddleware(): RequestHandler[] {
  const isProd = env.nodeEnv === 'production';

  return [
    helmet({
      // Avoid setting HSTS in dev (it can break local testing).
      hsts: isProd ? undefined : false,
      // Keep CSP strict; allow Vite dev tooling separately if you decide to serve frontend from backend later.
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'"],
          'base-uri': ["'self'"],
          'frame-ancestors': ["'none'"],
          'form-action': ["'self'"],
          'img-src': ["'self'", "data:", "https:"],
          'script-src': ["'self'"],
          'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          'font-src': ["'self'", "https://fonts.gstatic.com"],
          'connect-src': ["'self'"],
          'manifest-src': ["'self'"],
        },
      },
      crossOriginEmbedderPolicy: false,
      referrerPolicy: { policy: 'no-referrer' },
    }),

    rateLimit({
      windowMs: 60 * 1000,
      limit: 20,
      standardHeaders: true,
      legacyHeaders: false,
      message: { ok: false, message: 'Too many requests. Please try again soon.' },
    }),
  ];
}

export function originGate(): RequestHandler {
  return (req, res, next) => {
    const origin = req.headers.origin;
    if (!origin) return next(); // allow same-origin / server-to-server / curl

    if (origin !== env.allowedOrigin) {
      res.status(403).json({ ok: false, message: 'Blocked origin.' });
      return;
    }

    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  };
}

