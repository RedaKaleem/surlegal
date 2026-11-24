'use client';
export default function Error({reset}:{reset:()=>void}){return <main className="section detail"><h1>Something went wrong<br/>حدث خطأ</h1><button className="button" onClick={reset}>Try again · حاول مجدداً</button></main>}
