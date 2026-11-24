export const dynamic = 'force-static';
import { serviceSlugs,articleSlugs,business } from '@/lib/content';
export default function sitemap(){return ['en','ar'].flatMap(lang=>['','about','services','team','insights','contact','privacy','terms',...serviceSlugs.map(s=>'services/'+s),...articleSlugs.map(s=>'insights/'+s)].map(path=>({url:`${business.domain}/${lang}${path?'/'+path:''}`,alternates:{languages:{en:`${business.domain}/en${path?'/'+path:''}`,ar:`${business.domain}/ar${path?'/'+path:''}`}}})));}
