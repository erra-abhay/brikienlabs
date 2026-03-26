import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { env } from './env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { originGate, securityMiddleware } from './security.js';
import { parseContact } from './contact.js';

const app = express();

app.disable('x-powered-by');

app.use(originGate());
app.use(...securityMiddleware());

app.use(
  express.json({
    limit: '32kb',
    type: ['application/json', 'application/*+json'],
  }),
);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.options('/api/contact', (_req, res) => {
  res.status(204).end();
});

app.post('/api/contact', (req, res) => {
  const parsed = parseContact(req.body);
  if (!parsed.ok) {
    res.status(400).json(parsed);
    return;
  }

  // Production: send email / create ticket / persist message securely.
  // Intentionally not logging user message content (avoid PII leakage).

  res.json({ ok: true, message: 'Thanks — your message was received.' });
});

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${env.port}`);
});

