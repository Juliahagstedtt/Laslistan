# Test info

- Name: Katalog >> Som användare vill jag kunna favoritmarkera flera böcker i katalogen.
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\katalog.spec.js:18:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveCount(expected)

Locator: getByRole('button', { name: 'Favorit' })
Expected: 3
Received: 0
Call log:
  - expect.toHaveCount with timeout 5000ms
  - waiting for getByRole('button', { name: 'Favorit' })
    9 × locator resolved to 0 elements
      - unexpected value "0"

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\katalog.spec.js:21:39
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
   3 | test.describe('Katalog', () => {
   4 |     test.beforeEach(async ({ page }) => {
   5 |         await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
   6 |     })
   7 |
   8 |     test('Som användare vill jag kunna favoritmarkera en bok genom att klicka på hjärtat.',  async ({ page }) => {
   9 |
  10 |         const favoriteButton = page.getByRole('button', { name: 'Favorit' })
  11 |         await favoriteButton.click();
  12 |
  13 |         const myBooksButton = page.getByRole('button', { name: 'Mina böcker' })
  14 |         await myBooksButton.click();
  15 |
  16 |     })
  17 |
  18 |     test('Som användare vill jag kunna favoritmarkera flera böcker i katalogen.', async ({ page }) => {
  19 |
  20 |         const favoriteButtons = page.getByRole('button', { name: 'Favorit' });
> 21 |         await expect(favoriteButtons).toHaveCount(3, { timeout: 5000 });
     |                                       ^ Error: Timed out 5000ms waiting for expect(locator).toHaveCount(expected)
  22 |         
  23 |         await favoriteButtons.nth(0).click();
  24 |         await favoriteButtons.nth(1).click();
  25 |         await favoriteButtons.nth(2).click();
  26 |
  27 |         await page.getByRole('button', { name: 'Mina böcker' }).click();
  28 |         
  29 |         const favoriteBooks = page.locator('[data-testid="favorite-book"]');
  30 |         await expect(favoriteBooks).toHaveCount(3);
  31 |
  32 |     })
  33 |
  34 |      test('Som användare vill jag kunna avmarkera (ta bort) en favorit genom att klicka på hjärtat igen.', () => {
  35 |         
  36 |         
  37 |
  38 |
  39 |     })
  40 |
  41 |     test('Som användare vill jag kunna klicka flera gånger på samma hjärta utan att något blir fel.', () => {
  42 |         
  43 |     })
  44 |
  45 | })
  46 |
  47 |
```