import { test, expect } from '@playwright/test';

test('check', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
 
  await page.waitForTimeout(2000)
  await page.locator("#my-check-1").uncheck()
  await page.waitForTimeout(2000)
  await page.locator("#my-check-2").check()
 
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
