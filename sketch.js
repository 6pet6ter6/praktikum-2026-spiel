// ====================================================
//  Mein erstes p5.js-Programm
//  Tipp: Speichern mit Strg+S -> der Browser lädt
//  dank Live Server automatisch neu.
// ====================================================

// setup() läuft EINMAL ganz am Anfang.
function setup() {
  // Erstellt die Zeichenfläche (Breite, Höhe in Pixeln).
  createCanvas(600, 400);
}

// draw() läuft IMMER WIEDER, viele Male pro Sekunde.
// Alles, was sich bewegen oder ändern soll, kommt hier rein.
function draw() {
  // Hintergrundfarbe (Rot, Grün, Blau – jeweils 0 bis 255).
  background(30, 32, 40);

  // Farbe für das, was als Nächstes gezeichnet wird.
  fill(120, 200, 255);
  noStroke();

  // Zeichnet einen Kreis dort, wo gerade die Maus ist.
  // mouseX und mouseY sind die Maus-Koordinaten.
  // Die letzte Zahl (80) ist der Durchmesser.
  circle(mouseX, mouseY, 80);
}

// ----------------------------------------------------
//  Probier es aus! Verändere ein paar Werte und
//  schau, was passiert:
//   - andere Zahlen bei background(...) -> andere Farbe
//   - andere Zahl bei circle(...) -> größerer/kleinerer Kreis
//   - tausche circle(...) gegen square(mouseX, mouseY, 80)
// ----------------------------------------------------
