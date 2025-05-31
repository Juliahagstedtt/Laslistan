# Test info

- Name: Mina Böcker >> Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\my-books.spec.js:14:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('textbox', { name: 'När du valt, kommer dina favoritböcker att visas här.' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('textbox', { name: 'När du valt, kommer dina favoritböcker att visas här.' })

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\my-books.spec.js:16:31
```

# Page snapshot

```yaml
- banner:
  - img "Bokklubb på café"
  - heading "Läslistan" [level=1]
  - navigation:
    - button "Katalog" [disabled]
    - button "Lägg till bok"
    - button "Mina böcker"
- main:
  - heading "Välkommen!" [level=2]
  - paragraph: Sidan för dig som gillar att läsa. Välj dina favoriter.
  - button "❤️"
  - text: "\"Hur man tappar bort sin TV-fjärr 10 gånger om dagen\", Bertil Flimmer"
  - button "❤️"
  - text: "\"Kaffekokaren som visste för mycket\", Saga Espresson"
  - button "❤️"
  - text: "\"Min katt är min chef\", Kattis Jamsson"
  - button "❤️"
  - text: "\"100 sätt att undvika måndagar\", Göran Snooze"
  - button "❤️"
  - text: "\"Gräv där du står – och hitta en pizzameny\", Maja Skruv"
  - button "❤️"
  - text: "\"Jag trodde det var tisdag\", Kim Vilsen"
  - button "❤️"
  - text: "\"Att prata med växter – och vad de egentligen tycker om dig\", Flora Tistel"
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
  11 |         await expect(page.getByRole('heading', { name: 'Mina böcker'})).toBeVisible();
  12 |     })
  13 |
  14 |     test('Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.', async ({ page }) => {
  15 |         const textbox = page.getByRole('textbox', { name: 'När du valt, kommer dina favoritböcker att visas här.' })
> 16 |         await expect(textbox).toBeVisible();
     |                               ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  17 |     })
  18 |
  19 |
  20 | })
```