// Görsel QA aracı: web build'ini (dist/) statik sunup mobil görünümde
// ekran görüntüleri alır (shots/). Çalıştırmadan önce:
//   npx expo export --platform web
//   npm i -D puppeteer && node scripts/shots.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DIST = path.join(__dirname, '..', 'dist');
const OUT = path.join(__dirname, '..', 'shots');
fs.mkdirSync(OUT, { recursive: true });

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ico': 'image/x-icon', '.map': 'application/json',
};

const server = http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(DIST, url);
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    return fs.createReadStream(file).pipe(res);
  }
  // SPA fallback
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(DIST, 'index.html')).pipe(res);
});

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function clickText(page, text) {
  const handle = await page.evaluateHandle((t) => {
    const els = [...document.querySelectorAll('div,span,button,a')];
    const el = els.reverse().find((e) => e.textContent.trim() === t || e.textContent.includes(t));
    return el;
  }, text);
  const el = handle.asElement();
  if (!el) throw new Error('not found: ' + text);
  await el.click();
}

(async () => {
  await new Promise((r) => server.listen(8099, r));
  const browser = await puppeteer.launch({
    executablePath: await puppeteer.executablePath(),
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-device-scale-factor=2'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 412, height: 880, deviceScaleFactor: 2 });

  const base = 'http://localhost:8099';
  const shot = async (name) => { await wait(700); await page.screenshot({ path: path.join(OUT, name) }); console.log('shot', name); };

  // 1. Home
  await page.goto(base + '/', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => document.body.innerText.includes('Skorla'), { timeout: 15000 });
  await shot('01-home.png');

  // 2. Home scrolled
  await page.evaluate(() => { const s = document.querySelector('div[style*="overflow"]'); window.scrollTo(0, 600); });
  await page.evaluate(() => {
    const sc = [...document.querySelectorAll('*')].find((e) => e.scrollHeight > e.clientHeight + 100 && e.clientHeight > 300);
    if (sc) sc.scrollTop = 520;
  });
  await shot('02-home-scroll.png');

  // 3. Open a calculator info (CHA2DS2-VASc)
  await clickText(page, 'CHA₂DS₂-VASc');
  await page.waitForFunction(() => document.body.innerText.includes('Hesaplamaya başla'), { timeout: 15000 });
  await shot('03-info.png');

  // 4. Calculator
  await clickText(page, 'Hesaplamaya başla');
  await page.waitForFunction(() => document.body.innerText.includes('Sonucu gör'), { timeout: 15000 });
  await wait(400);
  // toggle a few criteria
  for (const t of ['Hipertansiyon', 'Diabetes mellitus']) {
    try { await clickText(page, t); await wait(250); } catch (e) {}
  }
  await shot('04-calculator.png');

  // 5. Result
  await clickText(page, 'Sonucu gör');
  await page.waitForFunction(() => document.body.innerText.includes('Öneri'), { timeout: 15000 });
  await shot('05-result.png');

  await browser.close();
  server.close();
  console.log('done');
})().catch((e) => { console.error(e); process.exit(1); });
