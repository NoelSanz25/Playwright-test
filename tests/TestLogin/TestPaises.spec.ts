import { test, expect } from '@playwright/test';
import { LoginPage } from '../object/LoginPage';


test('screenshot', async ({ page }) => {
    await page.goto(process.env.URL);
    await page.screenshot({path:'screenshot/logictest.png'})
    await page.waitForTimeout(3000)
});

test('admin', async ({ page }) => {


    await page.goto(process.env.URL);
    const loginPage = new LoginPage(page);
    await loginPage.login("noelsanz8@gmail.com", "123456");
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
    await page.screenshot({path:'screenshot/logictest.png'})

    await page.pause()
  });

export interface Country{
    name: string;
    capital: string,
    currency: string,
    language: string
  }