Jag har skapat mappen src/tests och lagt in alla testfiler där.
Sedan så har jag gjort klart mina userstorys från början hade jag 7-8. Nu har jag sammanlagt 15 stycken.

Nu ska jag börja med testerna.

Gjort klart alla userstorys nu! Sammanlagt är det 15 stycken.

Jag har ändrat navigeringstesterna så att de kollar efter unik text på varje sida, istället för att bara titta efter "Välkommen" som finns överallt. Annars är det svårt att veta om sidan verkligen har bytts.

Alla tester är klara nu och fungerar som de ska.

## Om Projektet:
Detta är ett E2E-testprojekt byggt med Playwright för appen Läslistan.
Appen gör det möjligt att navigera mellan de olika vyerna, markera & avmarkera favoritböcker och lägga till nya böcker.

## Funktionalitet som testas

## Navigering mellan vyer
1. Navigera till Lägg till bok vyn.
2. Navigera till Mina böcker vyn.
3. Navigera tillbaka till Katalog vyn .

## Katalog
4. Favoritmarkera en bok genom att klicka på hjärtat.
5. Favoritmarkera flera böcker i följd.
6. Avmarkera en bok genom att klicka på hjärtat igen.
7. Klicka flera gånger på samma hjärta utan att något går fel.

## Lägg till bok-vyn
8. Lägga till en ny bok med titel och författare.
9. Säkerställa att "Lägg till" knappen är inaktiv tills båda fälten är ifyllda.
10. Lägga till flera olika böcker i rad.
11. Kontrollera att ny bok verkligen syns i katalogen efter tillägg.

## Mina böcker-vyn
12. Se att favoritmarkerade böcker visas i vyn.
13. Se ett meddelande visas när inga favoritböcker är valda.
14. Ta bort en bok från "Mina böcker" genom att avmarkera den i katalogen.
15. Favoritmarkera en bok och se att den direkt dyker upp i "Mina böcker".


## Kör tester:
- npx playwright test
- npx playwright show-report