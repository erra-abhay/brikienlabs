import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import { env } from './env.js';

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(4000),
  website: z.string().optional(),
  humanCheck: z.string().optional(),
});

function sanitizeText(input: string) {
  // Strip any HTML to prevent XSS if later rendered anywhere.
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim();
}

export function parseContact(body: unknown) {
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? 'form');
      fieldErrors[key] = 'Invalid value.';
    }
    return { ok: false as const, message: 'Please correct the highlighted fields.', fieldErrors };
  }

  const { name, email, message, website, humanCheck } = parsed.data;

  // Honeypot: bots fill "website"
  if (website && website.trim().length > 0) {
    return { ok: false as const, message: 'Submission rejected.' };
  }

  if (env.requireHumanCheck) {
    if (!humanCheck || humanCheck.trim() !== '5') {
      return { ok: false as const, message: 'Human check failed.', fieldErrors: { humanCheck: 'Incorrect answer.' } };
    }
  }

  const clean = {
    name: sanitizeText(name),
    email: sanitizeText(email),
    message: sanitizeText(message),
  };

  return { ok: true as const, data: clean };
}

