# Test info

- Name: Mina Böcker >> Som användare vill jag kunna favoritmarkera en bok i katalogen och direkt se att den visas i "Mina böcker".
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\my-books.spec.js:56:9

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
    57 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\my-books.spec.js:58:65
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
   7 |     test('Som användare vill jag kunna se mina favoritböcker i vyn "Mina böcker".', async ({ page }) => {
   8 |
   9 |     // 1. Klicka på "Katalog" (om du inte redan är där)
  10 |         const katalogButton = page.getByRole('button', { name: 'Katalog' })
  11 |         await expect (katalogButton).toBeEnabled() 
  12 |         await katalogButton.click()
  13 |
  14 |     // 2. Klicka på ett hjärta för att lägga till en bok som favorit
  15 |         const favoriteButton = page.getByRole('button', { name: 'Favorit' }).first();
  16 |         await favoriteButton.click();
  17 |
  18 |     // 3. Kontrollera att den favoritmarkerade boken syns i "Mina böcker"
  19 |         await page.getByRole('button', { name: 'Mina böcker' }).click();
  20 |         await expect(page.getByText("Kaffekokaren som visste för mycket")).toBeVisible();
  21 |
  22 |     })
  23 |
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
  36 |         // 1. Klicka till katalog och på hjärta för favoritmarkera
  37 |             await page.getByRole('button', { name: 'Katalog' }).click();
  38 |             const favoriteButtonAgain = page.getByRole('button', { name: 'Favorit' }).first();
  39 |             await favoriteButtonAgain.click();
  40 |
  41 |         // 3. Klicka på "Mina böcker" för att kontrollera att den syns
  42 |             const MyBooksButton = page.getByRole('button', { name: 'Mina böcker' })
  43 |             await MyBooksButton.click()
  44 |
  45 |         // 4. Gå tillbaka till "katalog" sidan och avmarkera
  46 |             await page.getByRole('button', { name: 'Katalog' }).click();
  47 |             await favoriteButton.click();
  48 |
  49 |         // 5. Tillbaka till Mina böcker för att kontrollera den är borta
  50 |             await page.getByRole('button', { name: 'Mina böcker' }).click();
  51 |             await expect(page.getByText("När du valt, kommer dina favoritböcker att visas här.")).toBeVisible();
  52 |
  53 |     })
  54 |
  55 |
  56 |     test('Som användare vill jag kunna favoritmarkera en bok i katalogen och direkt se att den visas i "Mina böcker".', async ({ page }) => {
  57 |         // 1. Klicka på "Katalog" 
> 58 |             await page.getByRole('button', { name: 'Katalog' }).click();
     |                                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  59 |
  60 |         // 2. Klicka på hjärta för favoritmarkera
  61 |             const favoriteButton = page.getByRole('button', { name: 'Favorit' }).first();
  62 |             await favoriteButton.click();
  63 |
  64 |         // 3. Klicka på "Mina böcker" för att kontrollera att den syns
  65 |             await page.getByRole('button', { name: 'Mina böcker' }).click()
  66 |
  67 |         // 4. Kontrollera så att favorit boken syns
  68 |             const allFavorites = page.locator('[data-testid="favorite-book"]');
  69 |             await expect(allFavorites.first()).toBeVisible();
  70 |     })
  71 | })
  72 |
```