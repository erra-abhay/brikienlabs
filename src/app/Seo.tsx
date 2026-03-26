import { Helmet } from 'react-helmet-async';
import { env } from './env';

export function Seo({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const absoluteUrl =
    env.siteUrl && env.siteUrl.length > 0 ? new URL(path, env.siteUrl).toString() : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      {absoluteUrl ? <link rel="canonical" href={absoluteUrl} /> : null}
    </Helmet>
  );
}

