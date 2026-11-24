import Image from 'next/image';
import { business, type Lang } from '@/lib/content';

/** The supplied arch and wordmark, composed horizontally for small-screen clarity. */
export default function Brand({ lang, footer = false }: { lang: Lang; footer?: boolean }) {
  const name = lang === 'ar' ? business.arabicName : business.name;
  return (
    <span className={`brand-lockup${footer ? ' brand-lockup-footer' : ''}`} role="img" aria-label={name}>
      <Image className="brand-arch" src={business.brand[lang].arch} alt="" width={168} height={192} priority={!footer} />
      <span className="brand-type">
        <Image className="brand-wordmark" src={business.brand[lang].wordmark} alt="" width={600} height={lang === 'ar' ? 130 : 77} priority={!footer} />
        <span className="brand-descriptor">{lang === 'ar' ? business.arabicDescriptor : 'LEGAL CONSULTANCY'}</span>
      </span>
    </span>
  );
}
