'use client';

import { useTransition, useState } from 'react';
import { useRouter, usePathname } from '@/app/i18n';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '../../../i18n.config';
import { IoLanguage } from 'react-icons/io5';

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('common');

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-1 p-2 text-sm rounded-md bg-secondary/30 hover:bg-secondary/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <IoLanguage className="h-4 w-4" />
        <span>{t('language')}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-secondary/80 border border-border backdrop-blur-sm z-50">
          <ul
            className="py-1"
            role="listbox"
            aria-label={t('changeLanguage')}
          >
            {locales.map((loc) => (
              <li
                key={loc}
                role="option"
                aria-selected={locale === loc}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-secondary ${
                  locale === loc ? 'bg-primary/10 text-primary' : ''
                }`}
                onClick={() => handleLocaleChange(loc)}
              >
                {loc === 'en' ? 'English' : loc === 'es' ? 'Español' : 'Français'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 