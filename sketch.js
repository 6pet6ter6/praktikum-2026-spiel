let score = 0;
let lives = 3;
let highscore = 0;
let isGameOver = false;

let objektX;
let objektY;
let objektGroesse = 30; 
let fallTempo = 4;

let gefahrX;
let gefahrY;
let gefahrTempo = 4;

let korbX;
let korbBreite = 60; 
let korbGeschwindigkeit = 6; 

function setup() {
  let canvas = createCanvas(392, 492); 
  canvas.parent('game-container');
  
  korbX = width / 2;
  
  highscore = localStorage.getItem('coinHighscore') || 0;
  document.getElementById('highscore').textContent = highscore;
  
  
  neuesSpielfeld();
}

function draw() {
  clear(); 

  if (isGameOver) return;

  
  if (keyIsDown(LEFT_ARROW)) {
    korbX -= korbGeschwindigkeit; 
  }
  if (keyIsDown(RIGHT_ARROW)) {
    korbX += korbGeschwindigkeit; 
  }

  
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    korbX = mouseX;
  }


  if (korbX < korbBreite / 2) korbX = korbBreite / 2;
  if (korbX > width - korbBreite / 2) korbX = width - korbBreite / 2;

  
  fill(0, 240, 255);
  noStroke();
  rectMode(CENTER);
  rect(korbX, height - 30, korbBreite, 20, 10); 

  
  objektY = objektY + fallTempo;
  
  fill(255, 215, 0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("🪙", objektX, objektY); 

  
  if (
    objektY >= height - 45 && objektY <= height - 15 &&
    objektX > korbX - korbBreite / 2 &&
    objektX < korbX + korbBreite / 2
  ) {
    score++;
    document.getElementById('score').textContent = score; 
    fallTempo += 0.2; 
    gefahrTempo = fallTempo; 
    neuesSpielfeld();
  }

 
  if (objektY > height) {
    lives--;
    document.getElementById('lives').textContent = lives; 
    if (lives <= 0) {
      endGame();
    } else {
      neuesSpielfeld();
    }
  }


  gefahrY = gefahrY + gefahrTempo;
  text("💣", gefahrX, gefahrY);


  if (
    gefahrY >= height - 45 && gefahrY <= height - 15 &&
    gefahrX > korbX - korbBreite / 2 &&
    gefahrX < korbX + korbBreite / 2
  ) {
    lives--;
    document.getElementById('lives').textContent = lives;
    
    if (lives <= 0) {
      endGame();
    } else {
      neuesSpielfeld();
    }
  }
}


function neuesSpielfeld() {
  objektY = 10;
  gefahrY = 10;
  
  objektX = random(20, width - 20);
  
  
  do {
    gefahrX = random(20, width - 20);
  } while (abs(gefahrX - objektX) < 60);
}

function endGame() {
  isGameOver = true;
  if (score > highscore) {
    highscore = score;
    localStorage.setItem('coinHighscore', highscore);
    document.getElementById('highscore').textContent = highscore;
  }

  document.getElementById('final-score').textContent = score;
  document.getElementById('game-over-screen').style.display = 'flex';
}

function resetGame() {
  score = 0;
  lives = 3;
  fallTempo = 4;
  gefahrTempo = 4;
  isGameOver = false;

  document.getElementById('score').textContent = score;
  document.getElementById('lives').textContent = lives;
  document.getElementById('game-over-screen').style.display = 'none';

  neuesSpielfeld();
  loop(); 
}