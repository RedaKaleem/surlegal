/** Bespoke, consistent line icons for the four proposed practice areas. */
export default function ServiceIcon({ index }: { index: number }) {
  return (
    <svg className="service-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      {index === 0 && <>
        <path d="M12 53h40M17 49V23h30v26M22 49V28m10 21V28m10 21V28M14 23h36L32 12 14 23Z" />
        <path className="icon-accent" d="M10 57h44M28 18h8M21 49h22" />
      </>}
      {index === 1 && <>
        <path d="M39 9H15v46h27V23L29 9M29 9v14h13M21 30h13M21 36h9M21 42h6" />
        <path className="icon-accent" d="m34 45 16-16 5 5-16 16-7 2 2-7Zm13-13 5 5M32 52h21" />
      </>}
      {index === 2 && <>
        <path d="M32 8c6 5 13 7 21 9v16c0 11-9 19-21 25C20 52 11 44 11 33V17c8-2 15-4 21-9Z" />
        <path className="icon-accent" d="M32 15c5 3 10 5 15 6v12c0 8-6 14-15 19-9-5-15-11-15-19V21c5-1 10-3 15-6Z" />
        <path d="m24 32 6 6 11-12" strokeWidth="1.8" />
      </>}
      {index === 3 && <>
        <path d="M29 13H10v24h8v9l11-9h7V13h-7Z" />
        <path className="icon-accent" d="M41 23h13v25h-8v9L35 48h-7v-6M17 21h12M17 28h8M41 32h6M41 39h6" />
      </>}
    </svg>
  );
}
