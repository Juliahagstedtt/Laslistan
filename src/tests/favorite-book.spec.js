import { test, expect }  from '@playwright/test'

test.describe('Katlog', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Som användare vill jag kunna favorit markera en bok genom att trycka på hjärtat.', () => {
        

    })

    test('Som användare vill jag kunna favoritmarkera flera böcker i katalogen.', () => {
        
    })

     test('', () => {
        
    })

})

