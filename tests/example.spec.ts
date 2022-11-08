import { test, expect, chromium } from '@playwright/test';

test('Digital Inventory Test', async () => {
  test.setTimeout(90000);
  const browser = await chromium.launchPersistentContext('', {
    headless: false,
    channel: 'msedge'
  })
  const page = await browser.newPage();

  // await page.goto('https://mashtest.crm.dynamics.com/main.aspx?appid=d1808e68-48ad-ea11-a812-000d3a5ac89a&pagetype=entityrecord&etn=mash_digitalinventory&id=c7a81ede-8c4f-ed11-9562-000d3a5bc05a');
  await page.goto('https://mashtest.crm.dynamics.com/main.aspx?appid=d1808e68-48ad-ea11-a812-000d3a5ac89a&forceUCI=1&pagetype=entityrecord&etn=mash_digitalinventory&id=f0119dfb-2354-ed11-9561-000d3a5bcb2d');
  // await page.goto('https://mashtest.crm.dynamics.com/main.aspx?appid=d1808e68-48ad-ea11-a812-000d3a5ac89a&forceUCI=1&pagetype=entityrecord&etn=mash_digitalinventory&id=095c9b97-ee4d-ed11-9562-000d3a5bcb2d');

  await page.selectOption('[aria-label="Status"]', '943130000');

  await page.locator('[data-id="tablist-RelatedRequests"]').click();
  // await page.waitForTimeout(3000);
  // await page.locator('[aria-label="10-19-2022 13:34"]').dblclick();
  await page.locator('[aria-label="10-21-2022 11:35"]').dblclick()

  // await page.locator('span:has-text("SRE")').first().click();

  // await page.locator('[aria-label="Toggle menu"]').click();
  // await page.selectOption('[aria-label="Which website management service would you like?"]', '291130002'); 
  
  // await page.locator('[aria-label="Toggle menu"]').click();
  // await page.locator('[id="mash_updateexistingwebsiteoptions_ledit"]').fill('Add New Page');
  // await page.locator('[title="Add New Page"]').click();

  // await page.locator('[aria-label="Website URL, Lookup"]').click();
  // await page.locator('[aria-label="Website URL, Lookup"]').fill("https://BVT.test");
  // await page.locator('[aria-label="https://BVT.test"] >> text=https://BVT.test').click();

  // await page.locator('[data-id="mash_expectedgolivedate.fieldControl-date-time-input"]').click();
  // await page.locator('[data-id="mash_expectedgolivedate.fieldControl-date-time-input"]').fill("1-1-2029");

  await page.locator('[id="Toggle812"]').click();
  await page.locator('[aria-label="Do you want to add more than one new page to your website?: Required: No"]').click();

  // await page.locator('[text="New Website Page"]').click();

  await page.locator('[aria-label="New Website Page. Add New Website Page"]').click();
  
  await page.locator('[aria-label="Discard changes"]').click();

  await page.locator('[aria-label="Page Name"]').click();
  await page.locator('[aria-label="Page Name"]').fill("TestPage-2"); 

  await page.locator('[aria-label="Metadata (SEO) Title (up to 60 chars)"]').click();
  await page.locator('[aria-label="Metadata (SEO) Title (up to 60 chars)"]').fill("MetaDetaTitle-2");

  await page.locator('[aria-label="Metadata (SEO) Description (up to 160 chars)"]').click();
  await page.locator('[aria-label="Metadata (SEO) Description (up to 160 chars)"]').fill("MetaDetaDesc-2");

  await page.locator('[aria-label="Page Type"]').click();
  await page.selectOption('[aria-label="Page Type"]', '943130001');

  await page.locator('button:has-text("Save & Close")').last().click();

  await page.pause()

  // await page.selectOption('[aria-label="Add New Page"]', '291130003');

  // await page.locator('[aria-label="SRWSP11661"]').first().click();

  // const [, page1] = await Promise.all([
  //   page.locator("text=Add/Update Service Details").click(),
  //   page.waitForEvent("popup"),
  // ]);
  // await page1.waitForLoadState(); 

  // await page.getByLabel('Remove Page').check();

  // await page.locator('select[aria-label="Will this website include co-marketing/co-branding"]').last().click();
  // await page.locator('input[aria-label="Select appropriate update options"]').click();
  // await page.locator('#dropdown').selectOption({label:'Remove Page'})

  

  // await page.locator('[aria-label="Website\\ URL\\, \\Lookup\\, \\Required"]').click();
  // await page.waitForTimeout(2000);
  // await page.locator('[aria-label="Search\\ records\\ for\\ Platform\\,\\ Lookup\\ field"]').click();
  
  // await page.locator('[id="mash_updateexistingwebsiteoptions_ledit"]').fill("");
  

  // await page.locator('[aria-label="Website URL, Lookup"]').click();
  // await page.locator('[aria-label="Website URL, Lookup"]').fill('https://BVT.');

  // await page.locator('aria-label="Website URL, Lookup"').fill('ABCD');

 
  // await page.getByLabel('Remove Page').check();
  // await page.locator('[id="mash_updateexistingwebsiteoptions_item3"]').click();

  // await page.getByLabel('Select appropriate update options').selectOption('291130004');
  // await page.selectOption('[aria-label="Remove Page"]', '291130004');

  // await page.locator('[aria-label="Remove Page"]').click();

  // await page.locator('[aria-label="Select appropriate update options"]').fill("Add New Page"); 
  // await page.locator('[aria-label="Add New Page"]').click();
  // await page.locator('[aria-label="Select appropriate update options"]').click();

  // await page.locator('[aria-label="Website URL, Lookup"]').click();
  // await page.locator('[aria-label="Website URL, Lookup"]').fill("http//5012-1");
  // await page.locator('button:has-text("OK")').click();

});
