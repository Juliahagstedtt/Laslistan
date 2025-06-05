import { test, expect }  from '@playwright/test'

test.describe('Katalog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');

  await page.locator('[data-testid^="star-"]').first().waitFor({ state: 'visible', timeout: 10000 });
  });

  test('Som användare vill jag kunna favoritmarkera en bok genom att klicka på hjärtat.', async ({ page }) => {
    const favButton = page.locator('[data-testid^="star-"]').first();
    const raw = await favButton.getAttribute('data-testid');
    const title = raw.replace('star-', '');

    await favButton.click();

    await page.getByRole('button', { name: 'Mina böcker' }).click();
    await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();
  });

  test('Som användare vill jag kunna favoritmarkera flera böcker i katalogen.', async ({ page }) => {
    const favButtons = page.locator('[data-testid^="star-"]');
    const titles = [];

    for (let i = 0; i < 3; i++) {
      const btn = favButtons.nth(i);
      const raw = await btn.getAttribute('data-testid');
      const title = raw.replace('star-', '');
      titles.push(title);
      await btn.click();
    }

    await page.getByRole('button', { name: 'Mina böcker' }).click();

    for (const title of titles) {
      await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();
    }
  });

  test('Som användare vill jag kunna avmarkera (ta bort) en favorit genom att klicka på hjärtat igen.', async ({ page }) => {
    const favButton = page.locator('[data-testid^="star-"]').first();
    const raw = await favButton.getAttribute('data-testid');
    const title = raw.replace('star-', '');

    await favButton.click();

    await page.getByRole('button', { name: 'Mina böcker' }).click();
    await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();

    await page.getByRole('button', { name: 'Katalog' }).click();
    await favButton.click();

    await page.getByRole('button', { name: 'Mina böcker' }).click();
    await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
  });

  test('Som användare vill jag kunna klicka flera gånger på samma hjärta utan att något blir fel.', async ({ page }) => {
    const favButton = page.locator('[data-testid^="star-"]').first();
    const raw = await favButton.getAttribute('data-testid');
    const title = raw.replace('star-', '');

    await favButton.click(); // markera
    await favButton.click(); // avmarkera
    await favButton.click(); // markera igen

    await page.getByRole('button', { name: 'Mina böcker' }).click();
    await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();
  });
});