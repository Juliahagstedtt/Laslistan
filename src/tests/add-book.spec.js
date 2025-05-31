import { test, expect }  from '@playwright/test'

test.describe('Lägg till bok', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Som användare vill jag kunna lägga till en ny bok med titel och författare.', () => {
        
    }) 
       
    test('Som användare vill jag få ett felmeddelande om jag försöker lägga till en bok utan titel.', () => {
        
    })
        
})