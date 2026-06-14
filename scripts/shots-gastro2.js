// İki aşamalı gastro: hastalık butonları + seçili hastalık skorları.
const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const DIST = path.join(__dirname, '..', 'dist');
const OUT = path.join(__dirname, '..', 'shots');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.map': 'application/json' };
const server = http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]); let file = path.join(DIST, url);
  if (fs.existsSync(file) && fs.statSync(file).isFile()) { res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' }); return fs.createReadStream(file).pipe(res); }
  res.writeHead(200, { 'Content-Type': 'text/html' }); fs.createReadStream(path.join(DIST, 'index.html')).pipe(res);
});
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const clickExact = (page, text) => page.evaluate((t) => { const el = [...document.querySelectorAll('div')].find((e) => e.textContent && e.textContent.trim() === t); if (el) el.click(); return !!el; }, text);
const centerExact = (page, text) => page.evaluate((t) => { const el = [...document.querySelectorAll('div')].find((e) => e.textContent && e.textContent.trim() === t); if (el) el.scrollIntoView({ block: 'center' }); return !!el; }, text);
(async () => {
  await new Promise((r) => server.listen(8095, r));
  const browser = await puppeteer.launch({ executablePath: await puppeteer.executablePath(), args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 412, height: 880, deviceScaleFactor: 2 });
  await page.goto('http://localhost:8095/', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => document.body.innerText.includes('Skorla'), { timeout: 15000 });
  await wait(500);
  const GASTRO = 'Gastro / Hepatoloji'.toLocaleUpperCase('tr');
  await clickExact(page, GASTRO);
  await wait(600);
  await centerExact(page, GASTRO);
  await wait(400);
  await page.screenshot({ path: path.join(OUT, '09-gastro-buttons.png') });
  console.log('buttons shot');
  // click Ülseratif Kolit button
  await clickExact(page, 'Ülseratif Kolit');
  await wait(700);
  await centerExact(page, GASTRO);
  await wait(400);
  await page.screenshot({ path: path.join(OUT, '10-uc-selected.png') });
  console.log('uc selected shot');
  await browser.close(); server.close(); console.log('done');
})().catch((e) => { console.error(e); process.exit(1); });
