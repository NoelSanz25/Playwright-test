import { test, expect } from '@playwright/test';

test('do it', async ({ page }) => {
 
  await page.goto('https://www.google.com/');
 
  await expect(page).toHaveTitle(/Google/);

  await page.locator("//*[@id=\"APjFqb\"]").fill("do it center panama")
  await page.keyboard.press("Enter")
  await page.mouse.wheel(0,500)
  await page.waitForTimeout(3000)
  await page.locator("//*[@id=\"rso\"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a").click();
  await page.waitForTimeout(3000)
  await page.getByRole('link',{name: 'Departamentos'}).click();
  await page.getByText('Construcción',{exact:true}).nth(2).hover();
  await page.getByText('Canaletas').nth(1).click();
  await page.locator("#product_checkbox_fulfilment_samedaypickup_vr").uncheck();
  await page.waitForTimeout(3000)
  await page.locator("//*[@id=\"0_10_vr\"]").check();
  
  await page.pause()
});
test('RadioButon', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
 
  await page.waitForTimeout(2000)
  await page.locator("#my-radio-2").check()
 
  await page.pause()
});
test('RadioButonByLabel', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
 
  await page.waitForTimeout(2000)
  await page.getByLabel("Default radio").check();
 
  await page.pause()
});
 
test('getByText', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
 
  await page.waitForTimeout(2000)
  await page.getByText("Textarea").fill("HOLA MUNDO");
 
  await page.pause()
});
 
 
test('Dropdown', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.waitForTimeout(2000)
  const select = await page.locator("body > main > div > form > div > div:nth-child(2) > label:nth-child(1) > select")
  await page.waitForTimeout(2000)
  await select.selectOption({ label: "Two" })
  await page.pause()
 
});
test('hover', async ({ page }) => {
 
  await page.goto('https://www.cochezycia.com/');
 
  // const rowLocator = page.getByRole('listitem');
  // await rowLocator.filter({ hasText: 'Departamentos' }) .hover()
  await page.locator("#navbar > ul > li:nth-child(1) > #departmentsCO").nth(1).hover()
  await page.getByRole('link', { name: 'Construcción' }).nth(1).hover();
  await page.getByRole('link', { name: 'Alambres' }).nth(1).click();
 
  await page.pause()
});
