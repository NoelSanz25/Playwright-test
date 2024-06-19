import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Buscar', { exact: true }).click();
  await page.getByLabel('Buscar', { exact: true }).fill('ensa panama');
  await page.getByRole('link', { name: 'Bienvenido a ENSA | Grupo EPM' });
  await page.keyboard.press('Enter');
  await page.getByRole('link', { name: 'Contáctenos' }).click();
  await page.getByLabel('Tipo de Consulta *').selectOption('saldo');
  await page.pause()
});