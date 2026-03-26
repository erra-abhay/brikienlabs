function required(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function optional(name: string, fallback?: string) {
  return process.env[name] ?? fallback;
}

export const env = {
  nodeEnv: optional('NODE_ENV', 'development'),
  port: Number(optional('PORT', '8787')),
  allowedOrigin: optional('ALLOWED_ORIGIN', 'http://localhost:5173'),
  requireHumanCheck: (optional('REQUIRE_HUMAN_CHECK', 'true') ?? 'true') === 'true',
};

export const envHelpers = { required };

