import { test, chromium } from '@playwright/test';
import axios from 'axios';
test('BVTs Testing', async () => {
    test.setTimeout(600000);
    const browser = await chromium.launchPersistentContext('', {
        headless: false,
        channel: 'msedge'
    })
    const page = await browser.newPage();
    await page.goto("file:///C:/Users/v-chauhanri/OneDrive%20-%20MAQ%20Software/Playwright_Practise/playwright-report/index.html");
    await page.waitForTimeout(500);
    await page.locator('a:has-text("Digital Inventory Test")').click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    var data = JSON.stringify({
        "html": "Test Fail",
        "subject": "Test Fail",
        "images": "screenshot.png"
    })
    await page.waitForTimeout(5000);
    var config = {
        method: 'post',
        url: 'https://prod-05.westus.logic.azure.com:443/workflows/12b1322613bd404489102df9971ddcf1/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5aBc3dajNiat2aDszS_7YJZ4njf02hBP8qHQLNrm6D0',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }
    await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data))
    }).catch(function (error) {
        console.log(error)
    });
    await page.waitForTimeout(1000);
});