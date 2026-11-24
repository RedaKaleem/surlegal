import { writeFile } from 'node:fs/promises';
// Static hosts need an entry document at the site root.
await writeFile('out/index.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=/en/"><title>SURLEGAL</title></head><body><a href="/en/">English</a> · <a href="/ar/">العربية</a></body></html>');
