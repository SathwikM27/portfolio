const { test, expect } = require('@playwright/test');

test('check that UTF-8 tag is present', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));
    expect(metaCharset).toBe('utf-8');
});

test('check that page title is correct', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const title = await page.title();
    expect(title).toBe('My Portfolio');
});

test('check that the doctype is HTML', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const doctype = await page.evaluate(() => document.doctype.name);
    expect(doctype).toBe('html');
});

test('check that the page has a valid lang attribute', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const lang = await page.$eval('html', (html) => html.lang);
    expect(lang).toBe('en');
});

test('check that the page has a valid meta description', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const metaDescription = await page.$eval('meta[name="description"]', (meta) => meta.getAttribute('content'));
    expect(metaDescription).toBeTruthy();
});

test('check that the page has a valid meta keywords', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const metaKeywords = await page.$eval('meta[name="keywords"]', (meta) => meta.getAttribute('content'));
    expect(metaKeywords).toBeTruthy();
});


test('check that the page has a valid viewport', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const viewport = await page.$eval('meta[name="viewport"]', (meta) => meta.getAttribute('content'));
    expect(viewport).toBeTruthy();
});



test('check that the page has a valid footer', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const footer = await page.$('footer');
    expect(footer).toBeTruthy();
});

test('check that the page has a valid navigation menu', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const navMenu = await page.$('nav');
    expect(navMenu).toBeTruthy();
});

test('check that the page has a valid resume mailing list button', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const resumeButton = await page.$('a#resume-mail');
    expect(resumeButton).toBeTruthy();
});

test('check that the page has a valid download resume button', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const downloadResumeButton = await page.$('a#download-resume');
    expect(downloadResumeButton).toBeTruthy();
});

test('check that the page has a subheading', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const heading = await page.$('h2');
    expect(await heading.innerText()).toBe('Full-Stack Developer');
});

test('check that homepage has basic info', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const infoDiv = await page.$('div.info');
    expect(infoDiv).toBeTruthy();
});

test('check for About page', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const aboutHeading = await page.$('h6#about');
    expect(aboutHeading).toBeTruthy();
});

test('check for Projects page', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const projHeading = await page.$('h2#proj-page');
    expect(projHeading).toBeTruthy();
});
test('check for Contact page', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const contactHeading = await page.$('h2#cont-page');
    expect(contactHeading).toBeTruthy();
});
test('check for GitHub link', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const githubLink = await page.$('a#github-link');
    expect(githubLink).toBeTruthy();
});
test('check for LinkedIn link', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const githubLink = await page.$('a#linkedin-link');
    expect(githubLink).toBeTruthy();
});
test('check for Twitter link', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const githubLink = await page.$('a#twitter-link');
    expect(githubLink).toBeTruthy();
});
test('check for Email link', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000');
    const mailtoLink = await page.$('a[href^="mailto:"]');
    expect(mailtoLink).toBeTruthy();
});
