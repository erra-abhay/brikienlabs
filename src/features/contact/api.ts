import { env } from '../../app/env';

export type ContactRequest = {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot (should be empty)
  humanCheck?: string;
};

export type ContactResponse =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

export async function submitContact(payload: ContactRequest): Promise<ContactResponse> {
  const res = await fetch(`${env.apiBaseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'omit',
    body: JSON.stringify(payload),
  });

  const contentType = res.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return { ok: false, message: 'Unexpected server response.' };
  }

  const data = (await res.json()) as ContactResponse;
  return data;
}

