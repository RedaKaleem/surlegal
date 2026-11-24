// Deterministic web exports from the supplied artwork; originals are preserved.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('public/brand', { recursive: true });
const sources = {
  en: { file: 'public/SURLEGAL arch logo.png', mark: { left: 488, top: 110, width: 560, height: 640 }, word: { left: 95, top: 780, width: 1345, height: 172 } },
  ar: { file: 'public/Arabic Surlegal Arch Logo.png', mark: { left: 488, top: 78, width: 560, height: 615 }, word: { left: 200, top: 710, width: 1130, height: 245 } },
};
for (const [lang, source] of Object.entries(sources)) {
  await sharp(source.file).extract(source.mark).resize({height:192}).png().toFile(`public/brand/arch-${lang}.png`);
  await sharp(source.file).extract(source.word).resize({width:600}).png().toFile(`public/brand/wordmark-${lang}.png`);
  await sharp(source.file).resize({width:720}).webp({quality:90}).toFile(`public/brand/logo-${lang}.webp`);
}
// Use the real arch silhouette, with breathing room, at browser and touch sizes.
for (const size of [32, 48, 180]) {
  const mark = await sharp(sources.en.file).extract(sources.en.mark).resize({height:Math.round(size*.82)}).png().toBuffer();
  await sharp({create:{width:size,height:size,channels:4,background:'#F7F4ED'}}).composite([{input:mark,gravity:'centre'}]).png().toFile(`public/brand/icon-${size}.png`);
}
const mark = await sharp('public/brand/arch-en.png').toBuffer();
await writeFile('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#F7F4ED"/><image x="9" y="6" width="46" height="52" href="data:image/png;base64,${mark.toString('base64')}"/></svg>`);
// A restrained sharing card featuring the supplied English lockup.
const logo = await sharp(sources.en.file).resize({width:680}).png().toBuffer();
await sharp({create:{width:1200,height:630,channels:4,background:'#F7F4ED'}}).composite([{input:logo,gravity:'centre'}]).png().toFile('public/social.png');
