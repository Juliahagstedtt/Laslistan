# Test info

- Name: Katalog >> Som användare vill jag kunna favorit markera en bok genom att trycka på hjärtat.
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\favorite-book.spec.js:8:9

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Favorit' })

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\favorite-book.spec.js:10:30
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
   8 |     test('Som användare vill jag kunna favorit markera en bok genom att trycka på hjärtat.',  async ({ page }) => {
   9 |         const favoriteButton = page.getByRole('button', { name: 'Favorit' })
> 10 |         await favoriteButton.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  11 |
  12 |         const myBooksButton = page.getByRole('button', { name: 'Mina böcker' })
  13 |         await myBooksButton.click()
  14 |
  15 |     })
  16 |
  17 |     test('Som användare vill jag kunna favoritmarkera flera böcker i katalogen.', async ({ page }) => {
  18 |         
  19 |     })
  20 |
  21 |      test('', () => {
  22 |         
  23 |     })
  24 |
  25 | })
  26 |
  27 |
```