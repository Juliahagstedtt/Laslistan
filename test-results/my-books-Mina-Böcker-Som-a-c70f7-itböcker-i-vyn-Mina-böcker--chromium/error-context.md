# Test info

- Name: Mina Böcker >> Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\my-books.spec.js:8:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeEnabled()

Locator: getByRole('button', { name: 'Katalog' })
Expected: enabled
Received: disabled
Call log:
  - expect.toBeEnabled with timeout 5000ms
  - waiting for getByRole('button', { name: 'Katalog' })
    9 × locator resolved to <button disabled data-testid="catalog"> Katalog </button>
      - unexpected value "disabled"

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\my-books.spec.js:12:38
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
   7 | // Denna tyckte min lärare inte var bra, behöver komma på nåfot annat man kan testa
   8 |     test('Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".', async ({ page }) => {
   9 |
  10 |     // 1. Klicka på "Katalog" (om du inte redan är där)
  11 |         const katalogButton = page.getByRole('button', { name: 'Katalog' })
> 12 |         await expect (katalogButton).toBeEnabled() 
     |                                      ^ Error: Timed out 5000ms waiting for expect(locator).toBeEnabled()
  13 |         await katalogButton.click()
  14 |
  15 |     // 2. Klicka på ett hjärta för att lägga till en bok som favorit
  16 |         const favoriteButton = page.getByRole('button', { name: 'Favorit' }).first();
  17 |         await favoriteButton.click();
  18 |
  19 |
  20 |     // 3. Klicka på "Mina böcker" för att gå till vyn
  21 |         const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
  22 |         await MyBooksButton.click()
  23 |     })
  24 |
  25 |     test('Som användare vill jag att det visas ett meddelande om jag inte har några favoritböcker ännu.', async ({ page }) => {
  26 |         // Gå till "Mina böcker"-vyn
  27 |         const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
  28 |         await MyBooksButton.click()        
  29 |
  30 |         // Verifiera att ett meddelande visas när listan med favoritböcker är tom.
  31 |         await expect(page.getByText('När du valt, kommer dina favoritböcker att visas här.')).toBeVisible();
  32 |     })
  33 |
  34 |
  35 |     test('Som användare vill jag kunna ta bort en bok från "Mina böcker" genom att avmarkera den i katalogen.', async ({ page }) => {
  36 |
  37 |     })
  38 |
  39 |
  40 |
  41 |
  42 |     test('Som användare vill jag kunna favoritmarkera en bok i katalogen och direkt se att den visas i "Mina böcker".', async ({ page }) => {
  43 |
  44 |     })
  45 | })
  46 |
  47 | //beforeeach att man kan klicka sig till mina böcker
```