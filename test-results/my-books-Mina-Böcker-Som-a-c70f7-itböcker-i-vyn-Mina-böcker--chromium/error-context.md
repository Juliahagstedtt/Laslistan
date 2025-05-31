# Test info

- Name: Mina Böcker >> Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\my-books.spec.js:8:9

# Error details

```
Error: Timed out 3000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'Mina böcker' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 3000ms
  - waiting for getByRole('heading', { name: 'Mina böcker' })

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\my-books.spec.js:11:73
```

# Page snapshot

```yaml
- banner:
  - img "Bokklubb på café"
  - heading "Läslistan" [level=1]
  - navigation:
    - button "Katalog"
    - button "Lägg till bok"
    - button "Mina böcker" [disabled]
- main:
  - heading "Välkommen!" [level=2]
  - paragraph: Sidan för dig som gillar att läsa. Välj dina favoriter.
  - paragraph: När du valt, kommer dina favoritböcker att visas här.
  - list
```

# Test source

```ts
   1 | import { test, expect }  from '@playwright/test'
   2 |
   3 | test.describe('Mina Böcker', () => {
   4 |     test.beforeEach(async ({ page }) => {
   5 |         await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
   6 |     })
   7 |
   8 |     test('Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".', async ({ page }) => {
   9 |         const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
  10 |         await MyBooksButton.click()
> 11 |         await expect(page.getByRole('heading', { name: 'Mina böcker'})).toBeVisible({ timeout: 3000 });
     |                                                                         ^ Error: Timed out 3000ms waiting for expect(locator).toBeVisible()
  12 |     })
  13 |
  14 |     test('Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.', async ({ page }) => {
  15 |         const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
  16 |         await MyBooksButton.click()        
  17 |
  18 |
  19 |         await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
  20 |     })
  21 |
  22 |
  23 | })
```