import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from './Seo';

const SITE_URL = 'https://sabsus.shop';
const OG_IMAGE = 'https://sabsus.shop/og/image.png?v=4'; // bump v when needed

type Entry = { titleKey: string; descKey: string; canonicalPath?: string };

export const SeoRouter: React.FC = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const data = useMemo(() => {
    const map: Record<string, Entry> = {
      '/': { titleKey: 'seo.home.title', descKey: 'seo.home.desc', canonicalPath: '/home' }, // бо ти редіректиш / -> /home
      '/home': { titleKey: 'seo.home.title', descKey: 'seo.home.desc' },

      '/service': { titleKey: 'seo.service.title', descKey: 'seo.service.desc' },
      '/service/customer-experience': { titleKey: 'seo.service.customerExperience.title', descKey: 'seo.service.customerExperience.desc' },
      '/service/pos-staff-operations': { titleKey: 'seo.service.posStaff.title', descKey: 'seo.service.posStaff.desc' },
      '/service/kitchen-fulfillment': { titleKey: 'seo.service.kitchen.title', descKey: 'seo.service.kitchen.desc' },
      '/service/inventory-warehousing': { titleKey: 'seo.service.inventory.title', descKey: 'seo.service.inventory.desc' },
      '/service/analytics-management': { titleKey: 'seo.service.analytics.title', descKey: 'seo.service.analytics.desc' },
      '/service/marketing-customization': { titleKey: 'seo.service.marketing.title', descKey: 'seo.service.marketing.desc' },
      '/service/integration-scaling': { titleKey: 'seo.service.integration.title', descKey: 'seo.service.integration.desc' },

      '/about': { titleKey: 'seo.about.title', descKey: 'seo.about.desc' },
      '/pricing': { titleKey: 'seo.pricing.title', descKey: 'seo.pricing.desc' },
      '/contact': { titleKey: 'seo.contact.title', descKey: 'seo.contact.desc' },
    };

    const entry = map[pathname] || { titleKey: 'seo.default.title', descKey: 'seo.default.desc' };
    const canonicalPath = entry.canonicalPath || pathname;

    return {
      title: t(entry.titleKey),
      description: t(entry.descKey),
      canonicalUrl: `${SITE_URL}${canonicalPath}`,
      lang: i18n.resolvedLanguage || 'en',
    };
  }, [pathname, t, i18n.resolvedLanguage]);

  return (
    <Seo
      title={data.title}
      description={data.description}
      canonicalUrl={data.canonicalUrl}
      ogImageUrl={OG_IMAGE}
      lang={data.lang}
    />
  );
};
