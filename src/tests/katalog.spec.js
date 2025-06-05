import { test, expect }  from '@playwright/test'

test.describe('Katalog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');

      // Vänta tills hjärt knappen som heter star är synlig
  await page.locator('[data-testid^="star-"]').first().waitFor({ state: 'visible', timeout: 10000 });
  });

  test('Som användare vill jag kunna favoritmarkera en bok genom att klicka på hjärtat.', async ({ page }) => {
      // Välj första hjärtknappen i katalogen
    const favButton = page.locator('[data-testid^="star-"]').first();
    
    // Här plockar den ut boktiteln från data-testid 
    const raw = await favButton.getAttribute('data-testid');
    const title = raw.replace('star-', '');

    // Klicka på hjärtat för att favoritmarkera boken
    await favButton.click();

    // Gå till "Mina böcker"-vyn
    await page.getByRole('button', { name: 'Mina böcker' }).click();

    // Kontrollera att boken syns i favoritböcker
    await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();
  });

  test('Som användare vill jag kunna favoritmarkera flera böcker i katalogen.', async ({ page }) => {
    const favButtons = page.locator('[data-testid^="star-"]');
    const titles = [];

    // Klicka på de 7 hjärtorna för att favoritmarkera 7 böcker
    for (let i = 0; i < 7; i++) {
      const btn = favButtons.nth(i);
      const raw = await btn.getAttribute('data-testid');
      const title = raw.replace('star-', '');
      titles.push(title);
      await btn.click();
    }

    // Gå till "Mina böcker" vyn
    await page.getByRole('button', { name: 'Mina böcker' }).click();

    // Kontrollera att alla favoritböcker syns i listan
    for (const title of titles) {
      await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();
    }
  });

  test('Som användare vill jag kunna avmarkera (ta bort) en favorit genom att klicka på hjärtat igen.', async ({ page }) => {
    // Välj första bokens hjärta
    const favButton = page.locator('[data-testid^="star-"]').first();
    const raw = await favButton.getAttribute('data-testid');
    const title = raw.replace('star-', '');

    // 1. markera boken som favorit
    await favButton.click();
    
    // 2. Kontrollera att boken finns i "Mina böcker"
    await page.getByRole('button', { name: 'Mina böcker' }).click();
    await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();

    // 3. Gå tillbaka till katalogen och klicka på hjärtat igen för att ta bort den
    await page.getByRole('button', { name: 'Katalog' }).click();
    await favButton.click();

    // 4. Gå till "Mina böcker" och kontrollera att boken är borta
    await page.getByRole('button', { name: 'Mina böcker' }).click();
    await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
  });

  test('Som användare vill jag kunna klicka flera gånger på samma hjärta utan att något blir fel.', async ({ page }) => {
    const favButton = page.locator('[data-testid^="star-"]').first();
    const raw = await favButton.getAttribute('data-testid');
    const title = raw.replace('star-', '');

    // Klicka tre gånger: markera, ta bort, markera igen
    await favButton.click(); // markera
    await favButton.click(); // avmarkera
    await favButton.click(); // markera igen

    // Kontrollera att boken syns i "Mina böcker" i slutändan
    await page.getByRole('button', { name: 'Mina böcker' }).click();
    await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();
  });
});