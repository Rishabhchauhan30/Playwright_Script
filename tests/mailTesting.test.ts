import { test, expect, chromium } from '@playwright/test';
import axios from 'axios';

test.describe('Digital Inventory', () => {

  test('Digital Inventory Test', async () => {
    test.setTimeout(90000);
    const browser = await chromium.launchPersistentContext('', {
      headless: false,
      channel: 'msedge'
    })
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto('https://mashtest.crm.dynamics.com/main.aspx?appid=d1808e68-48ad-ea11-a812-000d3a5ac89a&forceUCI=1&pagetype=entityrecord&etn=mash_digitalinventory&id=f0119dfb-2354-ed11-9561-000d3a5bcb2d');

    await page.selectOption('[aria-label="Status"]', '943130000');

    await page.locator('[data-id="tablist-RelatedRequests"]').click();

    await page.locator('[aria-label="SRWSP11676"]').first().click();

    await page.waitForTimeout(10000);

    const [, page1] = await Promise.all([

      page.locator("text=Add/Update Service Details").click(),
      page.waitForEvent("popup"),
    ]);
    await page1.waitForLoadState();

    // await page.locator('[aria-label="10-21-2022 11:35"]').dblclick()

    await page1.waitForTimeout(3000);

    await page1.setViewportSize({ width: 1920, height: 1080 });

    // await page.locator('[id="Toggle812"]').click();
    await page1.locator('[aria-label="Do you want to add more than one new page to your website?: Required: No"]').click();

    await page1.locator('[aria-label="New Website Page. Add New Website Page"]').click();

    await page1.locator('[aria-label="Discard changes"]').click();

    await page1.locator('[aria-label="Page Name"]').click();
    await page1.locator('[aria-label="Page Name"]').fill("TestPage-2");

    await page1.locator('[aria-label="Metadata (SEO) Title (up to 60 chars)"]').click();
    await page1.locator('[aria-label="Metadata (SEO) Title (up to 60 chars)"]').fill("MetaDetaTitle-2");

    await page1.locator('[aria-label="Metadata (SEO) Description (up to 160 chars)"]').click();
    await page1.locator('[aria-label="Metadata (SEO) Description (up to 160 chars)"]').fill("MetaDetaDesc-2");

    await page1.locator('[aria-label="Page Type"]').click();
    await page1.selectOption('[aria-label="Page Type"]', '943130001');

    await page1.locator('button:has-text("Save & Close")').last().click();

    await page1.pause()
  });
  // test.afterAll(async () => {

  //   var data = JSON.stringify({
  //     "html": "Test Pass",
  //     "subject": "Test Pass",
  //     "images": "test-failed-3.png"
  //   })
  //   var config = {
  //     method: 'post',
  //     url: 'https://prod-48.westus.logic.azure.com:443/workflows/d552f7c21ff7496fbebcd931fe8c5200/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OGgslCjBl_pwvzxHRifncMqC-EroNNhDgc38_7iUP4Q',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     data: data
  //   }
  //   await axios(config).then(function (response) {
  //     console.log(JSON.stringify(response.data))
  //   }).catch(function (error) {
  //     console.log(error)
  //   });
  // })
});

