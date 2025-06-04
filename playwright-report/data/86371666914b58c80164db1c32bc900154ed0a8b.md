# Test info

- Name: Lägg till bok >> Som användare vill jag kunna lägga till en ny bok med titel och författare.
- Location: C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\add-book.spec.js:8:9

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Titel')

    at C:\Users\46736\Desktop\Hemsidor\Skola\Testning\Laslistan\src\tests\add-book.spec.js:13:40
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
   3 | test.describe('Lägg till bok', () => {
   4 |     test.beforeEach(async ({ page }) => {
   5 |         await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
   6 |     })
   7 |
   8 |     test('Som användare vill jag kunna lägga till en ny bok med titel och författare.', async ({ page }) => {
   9 |         // 1. Gå till "Lägg till bok"
  10 |         await page.getByRole('button', { name: 'Lägg till bok' }).click();
  11 |
  12 |         // 2. Fyll i titel och författare
> 13 |         await page.getByLabel('Titel').fill('Testbok');
     |                                        ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  14 |         await page.getByLabel('Författare').fill('Testförfattare');
  15 |
  16 |         // 3. Klicka på knappen
  17 |         await page.getByRole('button', { name: 'Lägg till ny bok' }).click();
  18 |
  19 |         // 4. Gå till katalog och kontrollera att boken syns
  20 |         await page.getByRole('button', { name: 'Katalog' }).click();
  21 |         await expect(page.getByText('Testbok')).toBeVisible();
  22 |         
  23 |     }) 
  24 |        
  25 |     test('Som användare vill jag att knappen "Lägg till bok" ska vara inaktiverad tills både titel och författare är ifyllda.', () => {
  26 |         
  27 |     })
  28 |
  29 |
  30 |     test('Som användare vill jag kunna lägga till flera olika böcker efter varandra.', () => {
  31 |         
  32 |     })
  33 |
  34 |
  35 |     test('Som användare vill jag kunna se att min nya bok har lagts till i katalogen.', () => {
  36 |         
  37 |     })
  38 |         
  39 | })
```