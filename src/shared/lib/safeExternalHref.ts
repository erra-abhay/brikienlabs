export function safeExternalHref(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return '#';
    return parsed.toString();
  } catch {
    return '#';
  }
}

