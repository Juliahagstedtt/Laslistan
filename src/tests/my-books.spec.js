import { test, expect }  from '@playwright/test'

test.describe('Mina Böcker', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })
    test('Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".', async ({ page }) => {

    // 1. Klicka på "Katalog" (om du inte redan är där)
        const katalogButton = page.getByRole('button', { name: 'Katalog' })
        await expect (katalogButton).toBeEnabled() 
        await katalogButton.click()

    // 2. Klicka på ett hjärta för att lägga till en bok som favorit
        const favoriteButton = page.getByRole('button', { name: 'Favorit' }).first();
        await favoriteButton.click();


    // 3. Klicka på "Mina böcker" för att gå till vyn
        const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
        await MyBooksButton.click()
    })


    test('Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.', async ({ page }) => {
        // Gå till "Mina böcker"-vyn
        const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
        await MyBooksButton.click()        

        // Verifiera att ett meddelande visas när listan med favoritböcker är tom.
        await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
    })


    test('Som användare vill jag kunna ta bort en bok från "Mina böcker" genom att avmarkera den i katalogen.', async ({ page }) => {


    })




    test('Som användare vill jag kunna favoritmarkera en bok i katalogen och direkt se att den visas i "Mina böcker".', async ({ page }) => {

    })
})

//beforeeach att man kan klicka sig till mina böcker