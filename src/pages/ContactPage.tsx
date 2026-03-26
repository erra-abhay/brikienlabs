import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Seo } from '../app/Seo';
import { env } from '../app/env';
import { submitContact, type ContactResponse } from '../features/contact/api';
import { Button } from '../shared/ui/Button';
import { Card, CardContent, CardDescription, CardTitle } from '../shared/ui/Card';
import { Input, Textarea } from '../shared/ui/Input';
import { SectionHeading } from '../shared/ui/SectionHeading';

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string; // honeypot
  humanCheck: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    website: '',
    humanCheck: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<ContactResponse | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const clientErrors = useMemo(() => {
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = 'Please enter your name.';
    if (!validateEmail(form.email.trim())) errs.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) errs.message = 'Message should be at least 10 characters.';
    if (env.requireHumanCheck && form.humanCheck.trim().length === 0) errs.humanCheck = 'Please answer the human check.';
    return errs;
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    setFieldErrors({});

    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }

    setSubmitting(true);
    try {
      const data = await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        website: form.website,
        humanCheck: env.requireHumanCheck ? form.humanCheck.trim() : undefined,
      });
      setResult(data);
      if (!data.ok && data.fieldErrors) setFieldErrors(data.fieldErrors);
      if (data.ok) {
        setForm({ name: '', email: '', message: '', website: '', humanCheck: '' });
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-10">
      <Seo
        title="Contact — BRIKIEN LABS"
        description="Contact BRIKIEN LABS for web development, software engineering, or blockchain solutions."
        path="/contact"
      />

      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something great"
        description="Send a message and we’ll get back to you. This form includes validation and basic anti-spam protection."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-3"
        >
          <Card>
            <CardContent>
              <CardTitle>Message us</CardTitle>
              <CardDescription className="mb-6">
                We’ll reply to the email you provide. Avoid including secrets.
              </CardDescription>

              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    aria-invalid={Boolean(fieldErrors.name)}
                  />
                  {fieldErrors.name ? <div className="text-xs text-rose-600">{fieldErrors.name}</div> : null}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    aria-invalid={Boolean(fieldErrors.email)}
                  />
                  {fieldErrors.email ? <div className="text-xs text-rose-600">{fieldErrors.email}</div> : null}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    aria-invalid={Boolean(fieldErrors.message)}
                  />
                  {fieldErrors.message ? <div className="text-xs text-rose-600">{fieldErrors.message}</div> : null}
                </div>

                {/* Honeypot field (bots often fill this). Keep visually hidden but accessible to bots. */}
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    value={form.website}
                    onChange={(e) => setForm((s) => ({ ...s, website: e.target.value }))}
                  />
                </div>

                {env.requireHumanCheck ? (
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="humanCheck">
                      Human check: What is 2 + 3?
                    </label>
                    <Input
                      id="humanCheck"
                      name="humanCheck"
                      inputMode="numeric"
                      value={form.humanCheck}
                      onChange={(e) => setForm((s) => ({ ...s, humanCheck: e.target.value }))}
                      aria-invalid={Boolean(fieldErrors.humanCheck)}
                    />
                    {fieldErrors.humanCheck ? (
                      <div className="text-xs text-rose-600">{fieldErrors.humanCheck}</div>
                    ) : null}
                  </div>
                ) : null}

                <div className="pt-2">
                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting ? 'Sending…' : 'Send message'}
                  </Button>
                </div>

                {result ? (
                  <div
                    className={
                      result.ok
                        ? 'rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200'
                        : 'rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-200'
                    }
                    role="status"
                  >
                    {result.message}
                  </div>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <div className="lg:col-span-2">
          <Card>
            <CardContent>
              <CardTitle>Security notes</CardTitle>
              <CardDescription className="mt-2">
                This form uses client-side validation and a backend endpoint with rate limiting + sanitization.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li>Do not include passwords or private keys.</li>
                <li>All inputs are validated again on the server.</li>
                <li>Basic anti-spam: honeypot + human check + rate limiting.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

