# Test info

- Name: Navigation >> Som användare vill jag kunna trycka på "Lägg till bok" för att komma till vyn man lägger till böcker.
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\navigation.spec.js:8:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'Lägg till bok' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Lägg till bok' })

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\navigation.spec.js:11:75
```

# Page snapshot

```yaml
- banner:
  - img "Bokklubb på café"
  - heading "Läslistan" [level=1]
  - navigation:
    - button "Katalog"
    - button "Lägg till bok" [disabled]
    - button "Mina böcker"
- main:
  - heading "Välkommen!" [level=2]
  - paragraph: Sidan för dig som gillar att läsa. Välj dina favoriter.
  - text: Titel
  - textbox
  - text: Författare
  - textbox
  - button "Lägg till ny bok" [disabled]
```

# Test source

```ts
   1 | import { test, expect }  from '@playwright/test'
   2 |
   3 | test.describe('Navigation', () => {
   4 |     test.beforeEach(async ({ page }) => {
   5 |         await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
   6 |     })
   7 |        
   8 |     test('Som användare vill jag kunna trycka på "Lägg till bok" för att komma till vyn man lägger till böcker.', async ({ page }) => {
   9 |         const addBookButton = page.getByRole('button', { name: 'Lägg till bok' })
  10 |         await addBookButton.click()
> 11 |         await expect(page.getByRole('heading', { name: 'Lägg till bok'})).toBeVisible();
     |                                                                           ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  12 |     })
  13 |       
  14 |     test('Som användare vill jag kunna trycka på "Mina böcker" för at komma till vyn där mina favori böcker är.', async ({page }) => {
  15 |         const MyBookButton = page.getByRole('button', { name: 'Mina böcker' })
  16 |         await MyBookButton.click()
  17 |         await expect(page.getByRole('heading', { name: 'Mina böcker'})).toBeVisible();
  18 |
  19 |     })
  20 |        
  21 |     test('Som användare vill jag kunna trycka på "Katalog" för att komma tillbaka till katalog sidan.', async ({page }) => {
  22 |         const katalogButton = page.getByRole('button', { name: 'Katalog' })
  23 |         await katalogButton.click() 
  24 |         await expect(page.getByRole('heading', { name: 'Katalog'})).toBeVisible();
  25 |
  26 |     })
  27 | })
```