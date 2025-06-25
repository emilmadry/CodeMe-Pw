import { test, expect } from '@playwright/test';
import { Dane } from '../../pages/dane';

const dane = new Dane();

dane.produkty.forEach((produkt) => {
  test(`sprawdzam produkt: ${produkt.name}`, async ({ page }) => {
    await page.goto(`product/${produkt.id}`);

    const pageContent = await page.textContent('.card .title');
    expect(pageContent).toContain(produkt.name);
  });
});

// test.describe('Home', () => {

//   test('Kliknij Plecak', async ({ page }) => {
//     const home = new Home(page);

//     await page.goto(home.pageUrl);

//     let text = await page.locator('.card-header-title').first().textContent();

//     if (text === null) {
//       throw new Error('Nie udało się pobrać tekstu z .card-header-title');
//     }

//     let cleanText = text.substring(0, text.length - 3);  // Usuwamy '...' z pobranej nazwy przedmiotu

//     await home.kliknijPlecak();
//     await expect(page).toHaveURL('product/1');
//     await expect(page.locator('.card-content .title')).toBeVisible();
//     let pageText = await page.locator('.card-content .title').textContent(); // przypisujemy wartość tytułu do drugiej zmiennej

//     await expect(pageText).toContain(cleanText); // sprawdzamy, czy tytuł ze strony produktu zawiera tytuł z karty

//   });
// });
