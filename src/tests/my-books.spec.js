import { test, expect }  from '@playwright/test'

test.describe('Mina Böcker', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".', async ({ page }) => {
        const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
        await MyBooksButton.click()
        await expect(page.getByRole('heading', { name: 'Mina böcker'})).toBeVisible();
    })

    test('Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.', async ({ page }) => {
        const textbox = page.getByRole('textbox', { name: 'När du valt, kommer dina favoritböcker att visas här.' })
        await expect(textbox).toBeVisible();
    })


})