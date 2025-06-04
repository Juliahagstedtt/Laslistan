import { test, expect }  from '@playwright/test'

test.describe('Katalog', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Som användare vill jag kunna favorit markera en bok genom att trycka på hjärtat.',  async ({ page }) => {
        const favoriteButton = page.getByRole('button', { name: 'Favorit' })
        await favoriteButton.click();

        const myBooksButton = page.getByRole('button', { name: 'Mina böcker' })
        await myBooksButton.click()

    })

    test('Som användare vill jag kunna favoritmarkera flera böcker i katalogen.', async ({ page }) => {
        
    })

     test('', () => {
        
    })

})

