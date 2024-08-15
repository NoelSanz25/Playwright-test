import { test, expect } from '@playwright/test';
import { LoginPage } from './object/LoginPage';
import path from 'path';

test('Login', async ({ page }, testInfo) => {

  await page.goto(process.env.URL);
  await page.waitForTimeout(3000)
  await page.locator("//*[@id=\"email\"]").fill("pruebas@yopmail.com")
  await page.locator("//*[@id=\"password\"]").fill("123456")
  await page.getByRole('button', { name: 'Sign Up' }).click();
  const result = await page.getByRole('heading',{name:'Hello, PlayWright'})
  await expect(result).toBeVisible()

  await testInfo.attach('tarea-login-1',{
    body:await page.screenshot(),
    contentType:'image/png'
  })
  await page.screenshot({path:'screenshot/tarea-login-1.png'})
});

test('Login-Admin', async ({ page }, testInfo) => {

  await page.goto(process.env.URL);
  const loginPage = new LoginPage(page)
  await loginPage.login("pruebas@yopmail.com", "123456");
  await page.getByRole('link', { name: 'admin' }).click();
  await page.locator("//*[@id=\"__next\"]/div/div/div[2]/main/ul/li[2]/button").click();
  const result = await page.locator("//*[@id=\"__next\"]/div/div/div[2]/main/label")
  await expect(result).toBeVisible()

  await testInfo.attach('tarea-login-2',{
    body:await page.screenshot(),
    contentType:'image/png'
  })
  await page.screenshot({path:'screenshot/tarea-login-2.png'})
});

test('Login-Locator-All', async ({ page, context }, testInfo) => {

  await page.goto(process.env.URL);
  const loginPage = new LoginPage(page)
  await loginPage.login("pruebas@yopmail.com", "123456");
  const Menu = await page.locator('header > div > div').all()
  // #__next > div > div > div.h-20 > header > div > div

  for (let div of Menu){
    if(await(await div.innerText()).match("dashboard")){
        await div.getByText('dashboard').click()
        await page.waitForTimeout(2000)
        const [newPage] = await Promise.all([
          context.waitForEvent('page'),
          page.locator('div').filter({ hasText: /^Multimax$/ }).click(),
        ]);
        const url = newPage.url();
        console.log("URL de Multimax", url);
        
        // Verifca que estamos en Multimax
        await newPage.waitForLoadState('load');

        await testInfo.attach('tarea-login-multimax', {
          body: await newPage.screenshot(),
          contentType: 'image/png'
        });

        // Validar la URL
        expect(url).toBe('https://www.multimax.net/');
      }
  }

  await expect(page).toHaveURL('http://127.0.0.1:3000/dashboard')
    await testInfo.attach('tarea-login-3',{
    body:await page.screenshot(),
    contentType:'image/png'
  })
  await page.screenshot({path:'screenshot/tarea-login-3.png'})
  
});

test('Login-Paises', async ({ page }, testInfo) => {


  await page.goto(process.env.URL);
  const loginPage = new LoginPage(page)
  await loginPage.login("pruebas@yopmail.com", "123456");
  await page.getByRole('link', { name: 'paises' }).click();
  await page.waitForTimeout(2000)
  const rows = await page.locator('#countries > tbody > tr').all()
  console.log("Inicio")
  let countries: Country[] = []
      for(let row of rows){
          let countryName = await row.locator("xpath=.//td[2]").innerText()
          let capital = await row.locator("xpath=.//td[3]").innerText()
          let currency = await row.locator("xpath=.//td[4]").innerText()
          let language = await row.locator("xpath=.//td[5]").innerText()
          let paises : Country = {
              name:countryName,
              capital: capital,
              currency: currency,
              language: language
          }
          countries.push(paises)
      }

  console.log(countries[7])
  console.log("FIN")
  let validarPais: Country = countries[0];
        expect(validarPais.name =='Armenia');
        expect(validarPais.capital =='Yerevan');
        expect(validarPais.currency =='Dram');
        expect(validarPais.language =='Armenian');
  
  await testInfo.attach('tarea-login-4',{
    body:await page.screenshot(),
    contentType:'image/png'
  })
  await page.screenshot({path:'screenshot/tarea-login-4.png'})
});

export interface Country{
  name: string;
  capital: string,
  currency: string,
  language: string
}

