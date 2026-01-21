import React, { useMemo } from 'react';
import { useHead } from '@unhead/react';

type SeoProps = {
  title: string;
  description: string;
  canonicalUrl: string; // повний URL
  ogImageUrl: string;   // повний URL
  lang?: string;
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonicalUrl,
  ogImageUrl,
  lang = 'en',
}) => {
  const meta = useMemo(
    () => [
      { name: 'description', content: description },

      // OpenGraph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SABSUS' },
      { property: 'og:image', content: ogImageUrl },
      { property: 'og:image:secure_url', content: ogImageUrl },
      { property: 'og:image:type', content: 'image/png' }, // бо image.png
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'SABSUS POS platform preview' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImageUrl },
      { name: 'twitter:image:alt', content: 'SABSUS POS platform preview' },
    ],
    [title, description, canonicalUrl, ogImageUrl]
  );

  useHead({
    htmlAttrs: { lang },
    title,
    link: [{ rel: 'canonical', href: canonicalUrl }],
    meta,
  });

  return null;
};

export default Seo;
