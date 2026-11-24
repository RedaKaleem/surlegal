# SURLEGAL

Bilingual Next.js / TypeScript / Tailwind website. Local-only; not deployed.

## Run

Node.js 20.9+ required.

```sh
npm install
npm run dev
```

Open http://localhost:3000/en or http://localhost:3000/ar.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Editing

- `lib/content.ts`: all bilingual content, proposed service categories, editorial placeholders, business information and provisional Arabic name/descriptor.
- `components/Site.tsx`: reusable site layout and page templates.
- `components/Inquiry.tsx`: client-side demonstration form. It validates locally and sends/stores nothing. Completion explicitly says nothing was submitted.
- `app/globals.css`: brand tokens, responsive layouts, RTL styles, architectural illustrations and reduced-motion support.
- `business.brand`: language-specific approved arch, wordmark and full-lockup asset paths. `components/Brand.tsx` composes the supplied artwork into responsive horizontal header/footer lockups.
- Original logo PNGs and the visual identity board are preserved in `public/`. `scripts/prepare-brand.mjs` produces optimized web exports, favicon/touch icons and the social card from the originals without redrawing the mark. Run `node scripts/prepare-brand.mjs` to regenerate them.

## Before launch

Confirm business identity, professional credentials, genuine service offerings, team information, contact details, and final Arabic spelling. Team previews are intentionally omitted. All three insights are clearly labeled editorial previews; supply professionally reviewed articles. Review both language versions, privacy draft and site terms with qualified professionals.

Connect a secure server-side inquiry endpoint before making the form live. Add server-side validation, rate limiting, spam controls, bounded requests, secure delivery/storage and retention policies. Keep secrets in environment variables and never log inquiry bodies. Implement actual pending, success and failure states based on endpoint responses; preserve the current duplicate-submission guard. Update the privacy notice to reflect actual processing and hosting. Do not simply remove the demonstration notice.

The PNG social sharing image, SVG/PNG favicons and Apple touch icon use the supplied SURLEGAL artwork. No unverified structured data is emitted. `robots.ts` currently disallows crawling during development; change this intentionally for launch and add the sitemap URL. No analytics, tracking, uploads, payments or accounts are present.

The architectural hero is a lightweight CSS illustration, with no remote image or font dependencies. System serif and Arabic-capable system fonts avoid layout shifts and external font requests. Dedicated licensed webfonts can be added later.

## Verification

- Production build, ESLint and TypeScript checks passed.
- All 30 localized pages returned HTTP 200 with the expected `lang`, `dir`, and equivalent-page language links.
- English and Arabic unknown pages returned 404. Sitemap, robots, favicon and sharing image returned 200.
- Chrome rendered the English home and Arabic consultation pages. Arabic empty-form validation and focus on the first required field were verified.
- Screenshot capture timed out and active browser use interrupted remaining interaction checks. Mobile visual layout and valid-form completion still need browser verification.

- Brand update: approved English/Arabic artwork integrated and asset previews inspected on ivory, including the 32px favicon. Production build and lint rerun after integration.

## Cloudflare Workers deployment

This site is a Next.js static export. In Cloudflare Builds use `npm run build` as the build command and `npx wrangler deploy` as the deploy command. The checked-in `wrangler.jsonc` deploys `out/` as static assets. Do not use OpenNext or a server-rendered Next.js preset; no server bundle is needed. English and Arabic are served at `/en/` and `/ar/`.
