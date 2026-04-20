import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteOrigin = site ?? new URL('https://www.yttertavle.se');
  const siteURL = new URL(import.meta.env.BASE_URL, siteOrigin).toString().replace(/\/$/, '');

  const body = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${siteURL}/sitemap-index.xml`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
