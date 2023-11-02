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
