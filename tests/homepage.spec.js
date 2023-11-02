const { test, expect } = require('@playwright/test');

test('check that UTF-8 tag is present', async ({ page }) => {
    await page.goto('/');
    const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));
    expect(metaCharset).toBe('UTF-8');
});