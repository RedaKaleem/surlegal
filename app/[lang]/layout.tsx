import { notFound } from 'next/navigation';
import '../globals.css';
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const {lang}=await params;if(lang!=='en'&&lang!=='ar')notFound();return <html lang={lang} dir={lang==='ar'?'rtl':'ltr'}><body>{children}</body></html>}
