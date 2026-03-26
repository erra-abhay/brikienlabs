# BRIKIEN LABS — Website

Modern, production-ready React website for **BRIKIEN LABS** with:
- React + Vite + TypeScript
- Tailwind CSS
- React Router (pages: Home, About, Team, Contact)
- SEO meta tags (`react-helmet-async`)
- Smooth animations (Framer Motion)
- Secure backend API for contact form (Express + Helmet + rate limiting + validation + sanitization)

## Folder structure (scalable)

Frontend:
- `src/app/`: app bootstrap, SEO, env helpers, routing
- `src/layouts/`: shared layouts (RootLayout)
- `src/pages/`: route pages (Home/About/Team/Contact/NotFound)
- `src/widgets/`: Navbar/Footer
- `src/features/`: feature modules (contact)
- `src/shared/`: reusable UI + utilities

Backend:
- `server/`: Express API (`/api/contact`, `/api/health`)

## Run locally

Install dependencies:

```bash
npm install
npm --prefix server install
```

Copy env files (optional):

```bash
cp .env.example .env
cp server/.env.example server/.env
```

Start frontend + backend together:

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8787`

## Contact form security

The contact form is protected by:
- **Client-side validation** + **server-side validation** (Zod)
- **Sanitization** (HTML stripped to prevent XSS if content is ever rendered)
- **Rate limiting** (per IP window)
- **Origin gate** (blocks unexpected browser origins)
- **Secure headers** (Helmet)
- **Anti-spam**: honeypot field + optional human check

## Production notes

- Put the site behind **HTTPS** (reverse proxy / hosting platform TLS).
- Set `ALLOWED_ORIGIN` to your real domain (e.g. `https://brikienlabs.com`).
- Do not log sensitive user content; integrate a secure email/ticket system instead.
