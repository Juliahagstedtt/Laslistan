import { test, expect }  from '@playwright/test'

test.describe('Mina Böcker', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".', () => {
        
    })

    test('Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.', () => {
        
    })


})