import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('pruebas', async ({ page }) => {
  
  await page.goto('https://www.ensa.com.pa/');
  
  await page.mouse.wheel(0,500)
  await page
        .locator("//*[@id=\"content\"]/div/div/div[1]/div[2]/div[4]/div/div/h2/a")
        .click();
  
        await page
        .locator("#content > div > div > div > div > div.col-md-3.radix-layouts-sidebar.panel-panel > div > div.panel-pane.pane-block.pane-menu-block-9.page-sidebar--sidebar-menu > div > div > ul > li.leaf.menu-mlid-13571.menu-link-línea-de-atención > a")
        .click();
  // await page.keyboard.press("Enter");


  await page.getByRole('img')

});

test('busqueda novey', async ({ page }) => {
  
  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle(/Google/);

  await page.locator("//*[@id=\"APjFqb\"]").fill("novey panama")
  await page.waitForTimeout(3000)
  await page.keyboard.press("Enter")
  await page.mouse.wheel(0,500)
  await page.waitForTimeout(3000)
  await page.locator("//*[@id=\"tads\"]/div[1]/div/div/div/div[1]/a").click();
  await page.getByPlaceholder("¿Qué estás buscando?").first().fill("Estufa");
  await page.keyboard.press("Enter")
  await page.locator("//*[@id=\"ctl00_SearchNav_ctl06_divFacet\"]").click()
  await page.getByRole('textbox',{name: 'Quick Lookup'}).first().fill("NISATO");
  await page.waitForTimeout(3000)
  await page.keyboard.press("Enter")
  await page.getByRole('link',{name: 'NISATO  1'}).click();

});

test('Drag and Drop', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/mouse_interaction.html');
  await page.waitForTimeout(2000)
  await page.locator('#draggable').dragTo(page.locator('#droppable'));
 

});
test('Upload file', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.waitForTimeout(2000)
  await page.getByLabel('Default checkbox').setInputFiles([]);
  await page.locator('//input[@name="my-file"]').setInputFiles({
    name: 'file.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test')
  });
 

});

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

  });
  test('RadioButon', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
   
    await page.waitForTimeout(2000)
    await page.locator("#my-radio-2").check()

  });
  test('RadioButonByLabel', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
   
    await page.waitForTimeout(2000)
    await page.getByLabel("Default radio").check();

  });
   
  test('getByText', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
   
    await page.waitForTimeout(2000)
    await page.getByText("Textarea").fill("HOLA MUNDO");
   
  });
   
   
  test('Dropdown', async ({ page }) => {
   
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.waitForTimeout(2000)
    const select = await page.locator("body > main > div > form > div > div:nth-child(2) > label:nth-child(1) > select")
    await page.waitForTimeout(2000)
    await select.selectOption({ label: "Two" })
   
  });
  test('hover', async ({ page }) => {
   
    await page.goto('https://www.cochezycia.com/');
   
    // const rowLocator = page.getByRole('listitem');
    // await rowLocator.filter({ hasText: 'Departamentos' }) .hover()
    await page.locator("#navbar > ul > li:nth-child(1) > #departmentsCO").nth(1).hover()
    await page.getByRole('link', { name: 'Construcción' }).nth(1).hover();
    await page.getByRole('link', { name: 'Alambres' }).nth(1).click();

  });
  