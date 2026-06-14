# 🎮 Dein Praktikums-Projekt: Bau dein eigenes Spiel

Hallo! In dieser Woche baust du dein **eigenes kleines Computerspiel** – komplett selbst, Zeile für Zeile. Am Ende läuft es im Browser, du kannst es online teilen und in der Schule zeigen.

Du brauchst **keine Vorkenntnisse**. Wirklich keine. Dieses Tutorial nimmt dich Schritt für Schritt an die Hand. Lies in Ruhe, tippe mit, probier herum – und keine Sorge, wenn mal etwas nicht klappt. Genau das ist Programmieren: ausprobieren, Fehler machen, reparieren, weitermachen.

> **Das Spiel, das du baust:** Oben fallen Objekte herunter, unten steuerst du einen Korb. Fang die Objekte, sammle Punkte, verpass nicht zu viele – sonst ist das Spiel vorbei.

---

## ⭐ So arbeitest du mit diesem Tutorial

- **Tippe den Code selbst ab**, statt ihn nur zu kopieren. Klingt mühsam, aber so lernst du es wirklich. Beim Tippen verstehst du, was jedes Stück macht.
- **Speichere oft** mit `Strg + S`. Dank „Live Server" lädt der Browser dann automatisch neu, und du siehst dort sofort, was sich geändert hat.
- **Probier die „🔧 Probier aus"-Aufgaben.** Da darfst (und sollst!) du herumspielen. Kaputtmachen kannst du nichts – im schlimmsten Fall machst du die Änderung rückgängig mit `Strg + Z`.
- **Führe ein kurzes Tagebuch.** Am Ende jedes Tages steht eine kleine „📓 Schreib auf"-Aufgabe. Daraus wird später deine Präsentation – das macht dir Freitag das Leben leicht.
- **Wenn du nicht weiterkommst:** unten gibt es einen Abschnitt **„🆘 Wenn etwas nicht klappt"**. Schau da zuerst rein.

---

## 🚦 Tag 0 – Aufwärmen (ca. 30–60 Minuten)

Bevor du selbst Code schreibst, schauen wir uns kurz an, worum es überhaupt geht.

### Was ist eigentlich Programmieren?

Ein Computer ist eigentlich ziemlich dumm: Er macht **nur genau das**, was man ihm sagt – aber das blitzschnell und ohne sich zu beschweren. Programmieren heißt: dem Computer in einer Sprache, die er versteht, Schritt für Schritt Anweisungen geben.

Wir benutzen die Sprache **JavaScript** und ein Werkzeug namens **p5.js**, das Zeichnen und kleine Spiele richtig einfach macht.

### Schau dir diese zwei kurzen Videos an

Sie sind auf Englisch, aber sehr anschaulich – du verstehst sie auch ohne perfektes Englisch, weil du dabei zusiehst, wie gezeichnet wird:

1. **„Code! Programming with p5.js for Beginners"** (Einführung): <https://thecodingtrain.com/tracks/code-programming-with-p5-js/>
2. **„Shapes & Drawing"** (Formen zeichnen – genau das machst du gleich auch)

> Der Mann in den Videos heißt Daniel Shiffman. Er ist berühmt dafür, das super freundlich und mit viel Spaß zu erklären. Wenn du in der Woche mal nicht weiterweißt, ist sein Kanal **The Coding Train** fast immer eine gute Anlaufstelle.

### Die zwei wichtigsten Wörter der Woche

In p5.js gibt es zwei „Bausteine", die immer da sind:

- **`setup()`** – läuft **einmal ganz am Anfang**. Hier wird alles vorbereitet (zum Beispiel die Zeichenfläche erstellt).
- **`draw()`** – läuft **immer wieder**, viele Male pro Sekunde. Alles, was sich bewegen soll, kommt hier rein.

Stell dir `draw()` wie die Einzelbilder eines Daumenkinos vor: Viele Bilder schnell hintereinander ergeben eine Bewegung.

### Öffne dein Projekt

1. Öffne **VS Code** (das Programm, in dem du arbeitest).
2. Der Projektordner `spiel-projekt` sollte schon offen sein. Falls nicht: **Datei → Ordner öffnen** und `spiel-projekt` auswählen.
3. Öffne die Datei **`sketch.js`** – hier schreibst du deinen Code.
4. Öffne die Datei **`index.html`**, klicke unten rechts auf **„Go Live"**. Jetzt öffnet sich der Browser, und ein Kreis folgt deiner Maus. 🎉

Du hast gerade dein erstes laufendes Programm gestartet. Bewege die Maus über die Fläche – siehst du den Kreis folgen?

### 🔧 Probier aus

Ändere in `sketch.js` ein paar Werte (speichern nicht vergessen, `Strg + S`):

- Tausche bei `background(30, 32, 40)` die Zahlen aus (jede geht von 0 bis 255). Was passiert mit der Hintergrundfarbe?
- Mach die `80` bei `circle(mouseX, mouseY, 80)` größer oder kleiner.
- Ersetze `circle(mouseX, mouseY, 80)` durch `square(mouseX, mouseY, 80)`.

### 📓 Schreib auf

Notiere in einer Textdatei (oder auf Papier): *Was ist mir heute zum ersten Mal klar geworden? Was waren setup() und draw() nochmal?*

---

## 🎨 Tag 1 (Montag) – Formen, Farben & das Koordinatensystem

**Ziel heute:** Du lernst, wie man auf dem Bildschirm zeichnet, und malst ein kleines Bild deiner Wahl.
Lösche den Inhalt von `sketch.js`.

### Das Koordinatensystem

Der Bildschirm ist wie ein Gitternetz. Der Punkt **oben links** ist `(0, 0)`.

- **x** geht nach **rechts** (größer = weiter rechts)
- **y** geht nach **unten** (größer = weiter unten) ← das ist ungewohnt, in der Schule ist „y nach oben"!

Bei einer Fläche von 600 × 400 ist also die **Mitte** bei x = 300, y = 200.

### Fang neu an

Gehe in die Datei `sketch.js` und tippe das hier ein:

```js
function setup() {
  createCanvas(600, 400); // Zeichenfläche: 600 breit, 400 hoch
}

function draw() {
  background(30, 32, 40); // dunkler Hintergrund

  // Ein paar Formen zum Üben:
  fill(255, 100, 100);    // Füllfarbe = rot-ish (Rot, Grün, Blau)
  circle(150, 200, 80);   // Kreis bei x=150, y=200, Durchmesser 80

  fill(100, 200, 255);    // Füllfarbe = hellblau
  rect(300, 150, 120, 100); // Rechteck: x, y (Ecke), Breite, Höhe

  fill(255, 220, 0);      // gelb
  triangle(450, 250, 500, 150, 550, 250); // drei Eckpunkte
}
```

Speichern (`Strg + S`) und im Browser anschauen.

### Was bedeutet was?

- `fill(r, g, b)` legt die **Füllfarbe** fest. Die drei Zahlen sind Rot, Grün, Blau (je 0–255). `fill(255, 0, 0)` ist knallrot, `fill(0, 0, 0)` schwarz, `fill(255, 255, 255)` weiß.
- `circle(x, y, durchmesser)` zeichnet einen Kreis.
- `rect(x, y, breite, höhe)` zeichnet ein Rechteck.
- `stroke(...)` wäre die **Randfarbe**, `noStroke()` schaltet den Rand aus.

> 💡 Die Reihenfolge zählt: Was du **später** im Code zeichnest, liegt **oben drauf**.

### 🔧 Probier aus: Mal dein eigenes Bild

Bau aus Formen etwas Eigenes – ein Gesicht, ein Haus, ein Raumschiff, was du willst. Nutze `circle`, `rect`, `triangle`, `line(x1, y1, x2, y2)` und verschiedene `fill`-Farben.

Nachschlagen, was es alles gibt, kannst du hier (die offizielle p5.js-Referenz):
- <https://p5js.org/reference/>

### 📓 Schreib auf

*Welche Formen kenne ich jetzt? Was war kniffliger, als ich dachte – die Farben oder die Koordinaten?*

---

## 🏃 Tag 2 (Dienstag) – Bewegung & Variablen

**Ziel heute:** Ein Objekt fällt von oben herunter, und unten erscheint dein Korb, der der Maus folgt.

### Variablen – das Gedächtnis des Programms

Eine **Variable** ist wie eine beschriftete Kiste, in der eine Zahl liegt. Du gibst ihr einen Namen und kannst den Wert später ändern.

```js
let punkte = 0;   // "let" heißt: Ich mache eine neue Kiste namens punkte
punkte = punkte + 1; // den Wert um 1 erhöhen
```

Genau so bringen wir gleich Bewegung rein: Wir erhöhen die y-Position eines Objekts in jedem Bild ein kleines bisschen – und schon „fällt" es.

### Tippe das ein (kompletter neuer Stand)

```js
// --- Variablen oben anlegen ---
let objektX;        // Position des fallenden Objekts (links/rechts)
let objektY;        // Position (oben/unten)
let fallTempo = 4;  // wie schnell es fällt

let korbBreite = 100;

function setup() {
  createCanvas(600, 400);
  objektX = 300; // startet mittig
  objektY = 0;   // startet ganz oben
}

function draw() {
  background(30, 32, 40);

  // --- Das Objekt fällt ---
  objektY = objektY + fallTempo; // jedes Bild ein Stück nach unten
  fill(255, 200, 80);
  noStroke();
  circle(objektX, objektY, 40);

  // --- Der Korb folgt der Maus ---
  let korbX = mouseX;
  fill(120, 200, 255);
  rectMode(CENTER); // Rechteck wird um seinen Mittelpunkt gezeichnet
  rect(korbX, height - 30, korbBreite, 20);
}
```

Speichern und anschauen: Das Objekt fällt nach unten und verschwindet, und unten folgt dein Korb der Maus.

### Wichtig zu verstehen

- Das `background(...)` **ganz oben in draw()** übermalt jedes Bild neu. Lösch es mal testweise – dann siehst du eine „Schmierspur". Genau dafür ist es da: Es wischt die Tafel vor jedem neuen Bild sauber.
- `height` ist die Höhe der Fläche (hier 400). `height - 30` heißt also „30 Pixel über dem unteren Rand".

### 🔧 Probier aus

Das Objekt fällt bisher nur **einmal** und ist dann weg. Lass es immer wieder von oben kommen. Füge dazu **am Ende von draw()** hinzu:

```js
  // Wenn das Objekt unten raus ist: wieder nach oben holen
  if (objektY > height) {
    objektY = 0;
  }
```

Das `if` (= „falls") prüft eine Bedingung. Mehr dazu morgen! Spiel auch mit `fallTempo` (z. B. 2 oder 8).

### 📓 Schreib auf

*Was ist eine Variable, mit eigenen Worten? Wie bringe ich etwas zum Fallen?*

---

## 🧠 Tag 3 (Mittwoch) – Logik: Objekte fangen

**Ziel heute:** Das Herzstück. Wenn der Korb das Objekt berührt, wird es gefangen, und oben erscheint ein neues an einer zufälligen Stelle.

### „if" – Entscheidungen treffen

`if` lässt den Computer entscheiden: *Falls etwas zutrifft, dann tu dies.*

```js
if (10 > 5) {
  // dieser Teil läuft, weil 10 wirklich größer als 5 ist
}
```

Zum Fangen müssen **zwei** Dinge gleichzeitig stimmen:
1. Das Objekt ist **weit genug unten** (auf Korbhöhe).
2. Das Objekt ist **waagerecht über dem Korb** (zwischen linkem und rechtem Korbrand).

Das „gleichzeitig" schreibt man mit `&&` (= „und").

### Neuer Stand

Wir machen `korbX` jetzt zu einer Variable ganz oben (damit wir sie überall benutzen können) und fügen eine kleine Hilfsfunktion `neuesObjekt()` hinzu.

```js
let objektX;
let objektY;
let objektGroesse = 40;
let fallTempo = 4;

let korbX;
let korbBreite = 100;

function setup() {
  createCanvas(600, 400);
  korbX = width / 2;
  neuesObjekt(); // legt das erste Objekt oben an
}

function draw() {
  background(30, 32, 40);

  // Korb folgt der Maus
  korbX = mouseX;
  fill(120, 200, 255);
  noStroke();
  rectMode(CENTER);
  rect(korbX, height - 30, korbBreite, 20);

  // Objekt fällt
  objektY = objektY + fallTempo;
  fill(255, 200, 80);
  circle(objektX, objektY, objektGroesse);

  // GEFANGEN? (unten genug UND über dem Korb)
  if (
    objektY > height - 40 &&
    objektX > korbX - korbBreite / 2 &&
    objektX < korbX + korbBreite / 2
  ) {
    neuesObjekt(); // gefangen -> neues Objekt
  }

  // VERPASST? (unten rausgefallen)
  if (objektY > height) {
    neuesObjekt();
  }
}

// Eigene kleine Funktion: holt ein neues Objekt nach oben
function neuesObjekt() {
  objektX = random(20, width - 20); // zufällige x-Position
  objektY = 0;
}
```

### Was ist neu?

- **`function neuesObjekt() { ... }`** ist eine **eigene Funktion** – ein Mini-Programm mit Namen, das du mehrfach aufrufen kannst, statt denselben Code mehrmals zu schreiben.
- **`random(20, width - 20)`** gibt eine **Zufallszahl** zurück – so taucht das Objekt jedes Mal woanders auf.
- **`korbX - korbBreite / 2`** ist der linke Korbrand, `korbX + korbBreite / 2` der rechte. Dazwischen muss das Objekt sein.

Spiel ein bisschen: Bewegt sich der Korb unter das Objekt, „verschwindet" es und ein neues fällt. Du fängst Dinge! 🧺

### 🔧 Probier aus

- Mach den Korb breiter oder schmaler (`korbBreite`). Wird's leichter oder schwerer?
- Ändere `fallTempo`. Wie schnell wird's zu hektisch?

### 📓 Schreib auf

*Wie erkennt das Programm, ob ich etwas gefangen habe? Was bedeutet `&&`?*

---

## 🏆 Tag 4 (Donnerstag) – Punkte, Leben & Game Over

**Ziel heute:** Aus der Spielidee wird ein echtes Spiel mit Punktestand, Leben und einem Game-Over-Bildschirm.

### Erweitere deinen Code

Füge **oben** zwei neue Variablen hinzu:

```js
let punkte = 0;
let leben = 3;
let vorbei = false; // true = Spiel ist vorbei
```

> `true` und `false` sind besondere Werte: „wahr" und „falsch". Perfekt für Ja/Nein-Fragen wie „Ist das Spiel vorbei?".

Ändere dann `draw()` so ab:

```js
function draw() {
  background(30, 32, 40);

  // Wenn das Spiel vorbei ist: Game-Over-Bild zeigen und Rest überspringen
  if (vorbei) {
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text("Game Over", width / 2, height / 2 - 20);
    textSize(20);
    text("Punkte: " + punkte, width / 2, height / 2 + 20);
    text("Neu laden zum Neustart (F5)", width / 2, height / 2 + 55);
    return; // <- stoppt draw() hier, der Rest läuft nicht mehr
  }

  // Korb
  korbX = mouseX;
  fill(120, 200, 255);
  noStroke();
  rectMode(CENTER);
  rect(korbX, height - 30, korbBreite, 20);

  // Objekt
  objektY = objektY + fallTempo;
  fill(255, 200, 80);
  circle(objektX, objektY, objektGroesse);

  // Gefangen?
  if (
    objektY > height - 40 &&
    objektX > korbX - korbBreite / 2 &&
    objektX < korbX + korbBreite / 2
  ) {
    punkte = punkte + 1; // Punkt dazu!
    neuesObjekt();
  }

  // Verpasst?
  if (objektY > height) {
    leben = leben - 1; // ein Leben weniger
    neuesObjekt();
    if (leben <= 0) {
      vorbei = true; // keine Leben mehr -> Spiel vorbei
    }
  }

  // Punkte & Leben anzeigen
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text("Punkte: " + punkte, 10, 30);
  textAlign(RIGHT);
  text("Leben: " + leben, width - 10, 30);
}
```

### Was ist neu?

- **`text("...", x, y)`** schreibt Text auf den Bildschirm. `"Punkte: " + punkte` klebt das Wort und die Zahl zusammen.
- **`return;`** beendet `draw()` an dieser Stelle – praktisch, damit beim Game Over nicht mehr weitergespielt wird.
- Du hast jetzt ein **vollständiges Spiel**: fangen = Punkt, verpassen = Leben weg, keine Leben = Game Over. 🎉

### 🔧 Probier aus

- Starte mit `leben = 5` statt 3.
- Mach das Spiel mit der Zeit schwerer: Setze irgendwo `fallTempo = fallTempo + 0.5;`, wenn du fängst (Vorsicht, wird schnell wild!).

### 📓 Schreib auf

*Mein Spiel ist jetzt komplett! Was war heute der schwierigste Teil? Welchen Highscore habe ich selbst geschafft?*

---

## ✨ Tag 5 (Freitag) – Verschönern, Veröffentlichen & Präsentieren

**Ziel heute:** Mach das Spiel zu **deinem** Spiel, stell es online und bereite die Präsentation vor.

### 1. Mach es zu deinem Spiel (ca. 1–1,5 Std)

Such dir ein paar Dinge aus, die du ändern willst:

- **Eigene Farben** für Hintergrund, Korb und Objekt.
- **Emoji statt Kreis!** Ersetze die Objekt-Zeichnung durch ein Emoji:
  ```js
  textSize(40);
  text("🍎", objektX, objektY); // statt circle(...)
  ```
  Probier verschiedene Emojis (🍕, ⭐, 👾, 🪙). Tipp: Der „Mittelpunkt" sitzt bei Text etwas anders – ggf. mit `textAlign(CENTER, CENTER)` zentrieren.
- **Ein Titel** oben im Spiel, z. B. mit `text("Apfel-Fänger", width/2, 30)`.
- **Schwierigkeit** nach deinem Geschmack einstellen (Tempo, Korbbreite, Leben).

> Lass dir Zeit damit – das ist der Teil, der dein Spiel einzigartig macht und in der Präsentation am meisten Eindruck schindet.

### 2. Online stellen (zusammen mit deinem Betreuer)

Damit du dein Spiel zeigen (und z. B. Freunden schicken) kannst, kommt es ins Internet über **GitHub Pages**. Diesen Schritt machst du **gemeinsam mit deinem Betreuer** – es dauert nur ein paar Minuten. Danach hast du eine echte Internet-Adresse zu deinem Spiel.

### 3. Präsentation vorbereiten

Hol dein **Tagebuch** raus – da steckt schon fast alles drin. Eine einfache, gute Struktur:

1. **Was habe ich gebaut?** (Spiel kurz zeigen / spielen lassen)
2. **Was ist p5.js und was sind setup() und draw()?** (in deinen eigenen Worten)
3. **Mein Lieblings-Aha-Moment** (z. B. als das Fangen zum ersten Mal funktioniert hat)
4. **Was war schwierig – und wie habe ich es gelöst?**
5. **Was würde ich als Nächstes einbauen, wenn ich mehr Zeit hätte?**

### 📓 Schreib auf

*Worauf bin ich diese Woche am meisten stolz?*

---

## 🆘 Wenn etwas nicht klappt (deine Rettungsinsel)

Fehler sind **normal** – auch Profis machen ständig welche. So findest du sie:

- **Nichts passiert / weißer Bildschirm?** Öffne im Browser die **Entwicklerkonsole** mit `F12` und schau dir die rote Fehlermeldung an. Sie sagt dir oft die Zeilennummer.
- **Häufigste Fehler:**
  - **Groß-/Kleinschreibung:** `mouseX` ist richtig, `mousex` oder `MouseX` funktioniert **nicht**. Der Computer ist da pingelig.
  - **Vergessene Klammer** `)` oder **geschweifte Klammer** `}`. VS Code färbt zusammengehörige Klammern – das hilft beim Suchen.
  - **Schmierspur statt Bewegung?** Du hast `background(...)` in `draw()` vergessen.
  - **Tippfehler im Namen:** Wenn du eine Variable `objektX` nennst, muss sie überall **genau gleich** heißen.
- **Speichern nicht vergessen** (`Strg + S`) – sonst ändert sich im Browser nichts.
- **Code kaputtgespielt?** `Strg + Z` macht Schritte rückgängig.

### Wo du nachschlagen kannst

- **p5.js-Referenz** (was kann ich alles?): <https://p5js.org/reference/>
- **The Coding Train** (Videos zu fast allem): <https://thecodingtrain.com/>
- **p5.js-Tutorials** (offiziell, Schritt für Schritt): <https://p5js.org/tutorials/>

Und wenn du gar nicht weiterkommst: kurz aufschreiben, **was** du versucht hast und **welche Fehlermeldung** kommt – dann deinen Betreuer fragen. Das ist kein „Aufgeben", das machen echte Entwickler den ganzen Tag.

---

## 🎯 Dein Wochenüberblick

| Tag | Was du schaffst |
|-----|-----------------|
| 0 (Aufwärmen) | Verstehen, was Programmieren ist; Projekt starten |
| 1 (Mo) | Formen & Farben zeichnen |
| 2 (Di) | Bewegung & Variablen – etwas fällt, Korb folgt der Maus |
| 3 (Mi) | Logik – Objekte fangen |
| 4 (Do) | Punkte, Leben & Game Over – fertiges Spiel |
| 5 (Fr) | Verschönern, online stellen, Präsentation |

**Viel Spaß – und trau dich, herumzuprobieren. Genau so wird man gut darin.** 🚀
