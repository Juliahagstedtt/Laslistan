import { test, expect }  from '@playwright/test'

test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })
    // Jag behöver fixa unik text/titel per test här
    test('Som användare vill jag kunna trycka på "Lägg till bok" för att komma till vyn man lägger till böcker.', async ({ page }) => {
        // Hitta knappen "Lägg till bok"
        const addBookButton = page.getByRole('button', { name: 'Lägg till bok' })
        // Klicka på knappen
        await addBookButton.click()
        // Kontrollera att vyn med texten Titel visas
        await expect(page.getByText('Titel')).toBeVisible();
    })
      
    test('Som användare vill jag kunna trycka på "Mina böcker" för at komma till vyn där mina favorit böcker är.', async ({ page }) => {
        // Hitta knappen "Mina böcker"
        const MyBookButton = page.getByRole('button', { name: 'Mina böcker' })
        // Klicka på knappen
        await MyBookButton.click()
        // Kontrollera att vyn med denna text visas
        await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
    })
       
    test('Som användare vill jag kunna trycka på "Katalog" för att komma tillbaka till katalog sidan.', async ({ page }) => {
    // Gå först till "Mina böcker"-vyn för att sedan kunna testa att navigera tillbaka till katalogsidan.
    // Detta är nödvändigt eftersom alla vyer har samma titel, "Välkommen!", vilket annars gör det svårt att se om sidbytet fungerar.
    const MyBookButton = page.getByRole('button', { name: 'Mina böcker' })
        await MyBookButton.click()

        // Hitta knappen "Katalog"
        const katalogButton = page.getByRole('button', { name: 'Katalog' })

        // Kontrollera att knappen är aktiverad
        await expect (katalogButton).toBeEnabled() 
        // Klicka på "Katalog"
        await katalogButton.click()
        // Kontrollera att innehåll från katalogen visas
        await expect(page.getByText('katt')).toBeVisible();
    })
})