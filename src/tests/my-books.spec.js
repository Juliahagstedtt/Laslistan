import { test, expect }  from '@playwright/test'

test.describe('Mina Böcker', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".', async ({ page }) => {
        // Klicka på "Mina böcker" för att gå till vyn
        const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
        await MyBooksButton.click()
        await expect(page.getByRole('heading', { name: 'Välkommen!'})).toBeVisible({ timeout: 3000 });
    })

    test('Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.', async ({ page }) => {
        // Gå till "Mina böcker"-vyn
        const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
        await MyBooksButton.click()        

        // Verifiera att ett meddelande visas när listan med favoritböcker är tom.
        await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
    })


})