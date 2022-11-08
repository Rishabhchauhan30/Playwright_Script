import { test,chromium } from '@playwright/test';
import axios from 'axios';

test('BVT Testing', async () => {
    test.setTimeout(30000);
    const browser = await chromium.launchPersistentContext('', {
        headless: false,
        channel: 'msedge'
    })
    const page = await browser.newPage();
    try {
        await page.goto('https://playwright.dev/');
        await page.waitForTimeout(5000);
        await page.goto('htps://www.youtube.com');
        var data = JSON.stringify({
            "html": "Test Pass",
            "subject": "Test Pass",
            "images": "screenshot.png"
        })
        var config = {
            method: 'post',
            url: 'https://prod-48.westus.logic.azure.com:443/workflows/d552f7c21ff7496fbebcd931fe8c5200/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OGgslCjBl_pwvzxHRifncMqC-EroNNhDgc38_7iUP4Q',
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
    }
    catch {
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
        var data = JSON.stringify({
            "html": "Test Fail",
            "subject": "Test Error",
            "images": "screenshot.png"
        })

        var config = {
            method: 'post',
            url: 'https://prod-48.westus.logic.azure.com:443/workflows/d552f7c21ff7496fbebcd931fe8c5200/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OGgslCjBl_pwvzxHRifncMqC-EroNNhDgc38_7iUP4Q',
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
    }

});