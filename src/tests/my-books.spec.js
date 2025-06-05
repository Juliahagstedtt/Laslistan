import { test, expect }  from '@playwright/test'

test.describe('Mina Böcker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
    await page.locator('[data-testid^="star-"]').first().waitFor({ state: 'visible' });
    })

    test('Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.', async ({ page }) => {
        // Gå till "Mina böcker"-vyn
        const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
        await MyBooksButton.click()        

        // Verifiera att ett meddelande visas när listan med favoritböcker är tom.
        await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
    }) 
    
    test('Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".', async ({ page }) => {
        const favButton = page.locator('[data-testid^="star-"]').first();
        const title = (await favButton.getAttribute('data-testid')).replace('star-', '');

        await favButton.click();
        await page.getByRole('button', { name: 'Mina böcker' }).click();
        await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();

    })

    test('Som användare vill jag kunna ta bort en bok från "Mina böcker" genom att avmarkera den i katalogen.', async ({ page }) => {
        const favButton = page.locator('[data-testid^="star-"]').first();
        const title = (await favButton.getAttribute('data-testid')).replace('star-', '');

        await favButton.click();
        await page.getByRole('button', { name: 'Mina böcker' }).click();
        await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();

        await page.getByRole('button', { name: 'Katalog' }).click();
        await favButton.click();

        await page.getByRole('button', { name: 'Mina böcker' }).click();
        await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
 

    })


    test('Som användare vill jag kunna favoritmarkera en bok i katalogen och direkt se att den visas i "Mina böcker".', async ({ page }) => {
        const favButton = page.locator('[data-testid^="star-"]').first();
        const title = (await favButton.getAttribute('data-testid')).replace('star-', '');

        await favButton.click();
        await page.getByRole('button', { name: 'Mina böcker' }).click();
        await expect(page.locator(`[data-testid="fav-${title}"]`)).toBeVisible();
    })
})
