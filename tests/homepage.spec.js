const { test, expect } = require('@playwright/test');

test('check that UTF-8 tag is present', async ({ page }) => {
    await page.goto('/');
    const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));
    expect(metaCharset).toBe('utf-8');
});

test('check that page title is correct', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toBe('Sathwik Varma Mudduluri — Full-Stack Developer');
});

test('check that the doctype is HTML', async ({ page }) => {
    await page.goto('/');
    const doctype = await page.evaluate(() => document.doctype.name);
    expect(doctype).toBe('html');
});

test('check that the page has a valid lang attribute', async ({ page }) => {
    await page.goto('/');
    const lang = await page.$eval('html', (html) => html.lang);
    expect(lang).toBe('en');
});

test('check that the page has a valid meta description', async ({ page }) => {
    await page.goto('/');
    const metaDescription = await page.$eval('meta[name="description"]', (meta) => meta.getAttribute('content'));
    expect(metaDescription).toBeTruthy();
});

test('check that the page has a valid meta keywords', async ({ page }) => {
    await page.goto('/');
    const metaKeywords = await page.$eval('meta[name="keywords"]', (meta) => meta.getAttribute('content'));
    expect(metaKeywords).toBeTruthy();
});

test('check that the page has a valid viewport', async ({ page }) => {
    await page.goto('/');
    const viewport = await page.$eval('meta[name="viewport"]', (meta) => meta.getAttribute('content'));
    expect(viewport).toBeTruthy();
});

test('check that the page has a valid footer', async ({ page }) => {
    await page.goto('/');
    const footer = await page.$('footer');
    expect(footer).toBeTruthy();
});

test('check that the page has a valid navigation menu', async ({ page }) => {
    await page.goto('/');
    const navMenu = await page.$('nav');
    expect(navMenu).toBeTruthy();
});

test('check that the page has a valid download resume button', async ({ page }) => {
    await page.goto('/');
    const downloadResumeButton = await page.$('a#download-resume');
    expect(downloadResumeButton).toBeTruthy();
});

test('check that the page has a subheading', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h2').first();
    await expect(heading).toHaveText('Full-Stack Developer');
});

test('check for Home section', async ({ page }) => {
    await page.goto('/');
    const home = await page.$('#home');
    expect(home).toBeTruthy();
});

test('check for Experience section', async ({ page }) => {
    await page.goto('/');
    const exp = await page.$('#experience');
    expect(exp).toBeTruthy();
});

test('check for Skills section', async ({ page }) => {
    await page.goto('/');
    const skills = await page.$('#skills');
    expect(skills).toBeTruthy();
});

test('check for Education section', async ({ page }) => {
    await page.goto('/');
    const edu = await page.$('#education');
    expect(edu).toBeTruthy();
});

test('check for Projects section', async ({ page }) => {
    await page.goto('/');
    const proj = await page.$('#projects');
    expect(proj).toBeTruthy();
});

test('check for Contact section', async ({ page }) => {
    await page.goto('/');
    const contact = await page.$('#contact');
    expect(contact).toBeTruthy();
});

test('check for GitHub link', async ({ page }) => {
    await page.goto('/');
    const githubLink = await page.$('a#github-link');
    expect(githubLink).toBeTruthy();
});

test('check for LinkedIn link', async ({ page }) => {
    await page.goto('/');
    const linkedinLink = await page.$('a#linkedin-link');
    expect(linkedinLink).toBeTruthy();
});

test('check for Twitter link', async ({ page }) => {
    await page.goto('/');
    const twitterLink = await page.$('a#twitter-link');
    expect(twitterLink).toBeTruthy();
});

test('check for Email link', async ({ page }) => {
    await page.goto('/');
    const mailtoLink = await page.$('a[href^="mailto:"]');
    expect(mailtoLink).toBeTruthy();
});

test('theme toggle switches between light and dark', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    await page.locator('button[aria-label*="mode"]:visible').first().click();
    await expect(html).not.toHaveClass(initialClass ?? '');
});
