import { test, expect }  from '@playwright/test'

test.describe('Lägg till bok', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    // test('Som användare vill jag kunna lägga till en ny bok med titel och författare.', () => {
        
    // }) 
       
    // test('Som användare vill jag att knappen "Lägg till bok" ska vara inaktiverad tills både titel och författare är ifyllda.', () => {
        
    // })
        
})