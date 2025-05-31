import { test, expect }  from '@playwright/test'

test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })
       
    test(' Som användare vill jag kunna trycka på "Lägg till bok" för att komma till vyn man lägger till böcker.', () => {
        
    })
      
    test('Som användare vill jag kunna trycka på "Mina böcker" för at komma till vyn där mina favori böcker är.', () => {
        
    })
       
    test('Som användare vill jag kunna trycka på "Katalog" för att komma tillbaka till katalog sidan.', () => {
        
    })
})