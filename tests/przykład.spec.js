// @ts-check
import { test, expect } from '@playwright/test';


test('Input', async ({ page }) => {

  await page.goto('edit');

  await page.getByRole('textbox', { name: 'Enter first & last name' }).click();
  await page.getByRole('textbox', { name: 'Enter first & last name' }).fill('Test');
  await page.locator('#join').click();
  await page.locator('#join').fill('I am goodnot really');
  // await expect(page.locator('#getMe')).toContainText('ortonikc');
  let textValue = await page.locator('#getMe').inputValue();
  expect(textValue).toBe('ortonikc');
  await page.locator('#clearMe').click();
  await page.locator('.card-ttile').fill('');
  await expect(page.locator('#dontwrite')).not.toBeEditable();
});



test('Input2', async ({ page }) => {

  await page.goto('home');

  await page.getByRole('img', { name: 'Fjallraven - Foldsack No. 1' }).click();
  await expect(page.getByText('Fjallraven - Foldsack No. 1')).toBeVisible();
  await page.locator('.card-content .button.is-primary').click();
  await page.getByRole('button', { name: '' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

});
