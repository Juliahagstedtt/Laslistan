import { test, expect }  from '@playwright/test'

test.describe('Katalog', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Som användare vill jag kunna favoritmarkera en bok genom att klicka på hjärtat.',  async ({ page }) => {

        const favoriteButton = page.getByRole('button', { name: 'Favorit' })
        await favoriteButton.click();

        const myBooksButton = page.getByRole('button', { name: 'Mina böcker' })
        await myBooksButton.click();

    })

    test('Som användare vill jag kunna favoritmarkera flera böcker i katalogen.', async ({ page }) => {

        const favoriteButtons = page.getByRole('button', { name: 'Favorit' });
        await expect(favoriteButtons).toHaveCount(3, { timeout: 5000 });
        
        await favoriteButtons.nth(0).click();
        await favoriteButtons.nth(1).click();
        await favoriteButtons.nth(2).click();

        await page.getByRole('button', { name: 'Mina böcker' }).click();
        
        const favoriteBooks = page.locator('[data-testid="favorite-book"]');
        await expect(favoriteBooks).toHaveCount(3);

    })

     test('Som användare vill jag kunna avmarkera (ta bort) en favorit genom att klicka på hjärtat igen.', () => {
        
        


    })

    test('Som användare vill jag kunna klicka flera gånger på samma hjärta utan att något blir fel.', () => {
        
    })

})

