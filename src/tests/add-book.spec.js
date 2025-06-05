import { test, expect }  from '@playwright/test'

test.describe('Lägg till bok', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
    await expect(page.getByRole('button', { name: 'Lägg till bok' })).toBeEnabled({ timeout: 10000 });
  });

  test('Som användare vill jag kunna lägga till en ny bok med titel och författare.', async ({ page }) => {
    await page.getByRole('button', { name: 'Lägg till bok' }).click();

    await page.locator('[data-testid="add-input-title"]').fill('Testbok');
    await page.locator('input[type="text"]').nth(1).fill('Testförfattare');

    const addButton = page.locator('[data-testid="add-submit"]');
    await expect(addButton).toBeEnabled();
    await addButton.click();

    await page.getByRole('button', { name: 'Katalog' }).click();
    await expect(page.getByText('Testbok')).toBeVisible();
  });

  test('Som användare vill jag att knappen "Lägg till ny bok" ska vara inaktiverad tills både titel och författare är ifyllda.', async ({ page }) => {
    await page.getByRole('button', { name: 'Lägg till bok' }).click();

    const titleInput = page.locator('[data-testid="add-input-title"]');
    const authorInput = page.locator('input[type="text"]').nth(1);
    const addButton = page.locator('[data-testid="add-submit"]');

    await expect(addButton).toBeDisabled();

    await titleInput.fill('Bara titel');
    await expect(addButton).toBeDisabled();

    await authorInput.fill('Bara författare');
    await expect(addButton).toBeEnabled();
  });

  test('Som användare vill jag kunna lägga till flera olika böcker efter varandra.', async ({ page }) => {
    await page.getByRole('button', { name: 'Lägg till bok' }).click();

    const titleInput = page.locator('[data-testid="add-input-title"]');
    const authorInput = page.locator('input[type="text"]').nth(1);
    const addButton = page.locator('[data-testid="add-submit"]');

    await titleInput.fill('Bok 1');
    await authorInput.fill('Författare 1');
    await addButton.click();

    await titleInput.fill('Bok 2');
    await authorInput.fill('Författare 2');
    await addButton.click();

    await page.getByRole('button', { name: 'Katalog' }).click();
    await expect(page.getByText('Bok 1')).toBeVisible();
    await expect(page.getByText('Bok 2')).toBeVisible();
  });

  test('Som användare vill jag kunna se att min nya bok har lagts till i katalogen.', async ({ page }) => {
    await page.getByRole('button', { name: 'Lägg till bok' }).click();

    await page.locator('[data-testid="add-input-title"]').fill('Synlig bok');
    await page.locator('input[type="text"]').nth(1).fill('Synlig författare');

    await page.locator('[data-testid="add-submit"]').click();
    await page.getByRole('button', { name: 'Katalog' }).click();

    await expect(page.getByText('Synlig bok')).toBeVisible();
  });
        
})