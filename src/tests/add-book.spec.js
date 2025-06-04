import { test, expect }  from '@playwright/test'

test.describe('Lägg till bok', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Som användare vill jag kunna lägga till en ny bok med titel och författare.', async ({ page }) => {
        // 1. Gå till "Lägg till bok"
        await page.getByRole('button', { name: 'Lägg till bok' }).click();

        // 2. Fyll i titel och författare
        await page.getByLabel('Titel').fill('Testbok');
        await page.getByLabel('Författare').fill('Testförfattare');

        // 3. Klicka på knappen
        await page.getByRole('button', { name: 'Lägg till ny bok' }).click();

        // 4. Gå till katalog och kontrollera att boken syns
        await page.getByRole('button', { name: 'Katalog' }).click();
        await expect(page.getByText('Testbok')).toBeVisible();
        
    }) 
       
    test('Som användare vill jag att knappen "Lägg till bok" ska vara inaktiverad tills både titel och författare är ifyllda.', () => {
        
    })


    test('Som användare vill jag kunna lägga till flera olika böcker efter varandra.', () => {
        
    })


    test('Som användare vill jag kunna se att min nya bok har lagts till i katalogen.', () => {
        
    })
        
})