const { test, expect } = require('@playwright/test');

test('check that UTF-8 tag is present', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));
    expect(metaCharset).toBe('utf-8');
});

test('check that page title is correct', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const title = await page.title();
    expect(title).toBe('My Portfolio');
});

test('check that the page has a valid doctype', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const doctype = await page.$eval('html', (html) => html.doctype.name);
    expect(doctype).toBe('html');
});

test('check that the page has a valid lang attribute', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const lang = await page.$eval('html', (html) => html.lang);
    expect(lang).toBe('en');
});

test('check that the page has a valid meta description', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const metaDescription = await page.$eval('meta[name="description"]', (meta) => meta.getAttribute('content'));
    expect(metaDescription).toBeTruthy();
});

test('check that the page has a valid meta keywords', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const metaKeywords = await page.$eval('meta[name="keywords"]', (meta) => meta.getAttribute('content'));
    expect(metaKeywords).toBeTruthy();
});

test('check that the page has a valid favicon', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const favicon = await page.$eval('link[rel="icon"]', (link) => link.getAttribute('href'));
    expect(favicon).toBeTruthy();
});

test('check that the page has a valid viewport', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const viewport = await page.$eval('meta[name="viewport"]', (meta) => meta.getAttribute('content'));
    expect(viewport).toBeTruthy();
});

test('check that the page has a valid header', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const header = await page.$('header');
    expect(header).toBeTruthy();
});

test('check that the page has a valid footer', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const footer = await page.$('footer');
    expect(footer).toBeTruthy();
});

test('check that the page has a valid navigation menu', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/docs/index.htm');
    const navMenu = await page.$('nav');
    expect(navMenu).toBeTruthy();
});

