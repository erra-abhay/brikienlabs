function requiredEnv(name: string): string {
  const value = import.meta.env[name];
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function optionalEnv(name: string): string | undefined {
  const value = import.meta.env[name];
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

export const env = {
  apiBaseUrl: optionalEnv('VITE_API_BASE_URL') ?? '',
  siteUrl: optionalEnv('VITE_SITE_URL'),
  requireHumanCheck: (optionalEnv('VITE_REQUIRE_HUMAN_CHECK') ?? 'true') === 'true',
};

export const envHelpers = { requiredEnv };

