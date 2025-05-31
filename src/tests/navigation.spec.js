import { test, expect }  from '@playwright/test'

test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })
       
    test('Som användare vill jag kunna trycka på "Lägg till bok" för att komma till vyn man lägger till böcker.', async ({ page }) => {
        const addBookButton = page.getByRole('button', { name: 'Lägg till bok' })
        await addBookButton.click()
        await expect(page.getByRole('heading', { name: 'Lägg till bok'})).toBeVisible();
    })
      
    test('Som användare vill jag kunna trycka på "Mina böcker" för at komma till vyn där mina favori böcker är.', async ({page }) => {
        const MyBookButton = page.getByRole('button', { name: 'Mina böcker' })
        await MyBookButton.click()
        await expect(page.getByRole('heading', { name: 'Mina böcker'})).toBeVisible();

    })
       
    test('Som användare vill jag kunna trycka på "Katalog" för att komma tillbaka till katalog sidan.', async ({page }) => {
        const katalogButton = page.getByRole('button', { name: 'Katalog' })
        await katalogButton.click() 
        await expect(page.getByRole('heading', { name: 'Katalog'})).toBeVisible();

    })
})