# Test info

- Name: Navigation >> Som användare vill jag kunna trycka på "Katalog" för att komma tillbaka till katalog sidan.
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\navigation.spec.js:21:9

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Katalog' })
    - locator resolved to <button disabled data-testid="catalog"> Katalog </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    55 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\navigation.spec.js:23:29
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
   3 | test.describe('Navigation', () => {
   4 |     test.beforeEach(async ({ page }) => {
   5 |         await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
   6 |     })
   7 |        
   8 |     test('Som användare vill jag kunna trycka på "Lägg till bok" för att komma till vyn man lägger till böcker.', async ({ page }) => {
   9 |         const addBookButton = page.getByRole('button', { name: 'Lägg till bok' })
  10 |         await addBookButton.click()
  11 |         await expect(page.getByRole('heading', { name: 'Lägg till bok'})).toBeVisible();
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
> 23 |         await katalogButton.click() 
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |         await expect(page.getByRole('heading', { name: 'Katalog'})).toBeVisible();
  25 |
  26 |     })
  27 | })
```