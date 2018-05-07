/**
 * Xuechun Wu
 * IGME-609: PE14, 4/18/18
 * Summarization of sketch activity
 */

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
var fairy;
var bubbles = [];
var reapers = [];
var numNPC = 15;
var canvasSize = 600;
var gameOver;
var timer;
var globalSpeed;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	initGame()
}

function initGame(){
	gameOver = false;
	globalSpeed = 1;
	fairy = new Fairy();
  for (var i = 0; i < this.numNPC; i++) {
    bubbles[i] = new Bubble(random(0, width), random(height, 2 * height));
    reapers[i] = new Reaper(random(0, width), random(height, 2 * height));
  }
}

function hitTest(c1, c2){
	return dist(c1.x, c1.y, c2.x, c2.y) <= (c1.size + c2.size)/2;
}

function draw() {
	// guard.
	if (gameOver) {
		background(0, 190, 220);
		fill(0, 250, 255)
		textAlign(CENTER);
		textSize(80);
		fill(255)
		var margin = 50;
		text("GAME OVER", margin, margin, width-2*margin, height/2)
		textSize(36);
		text("You survive " + timer + " sec!", margin, height/2+margin, width-2*margin, height/2)
		textSize(28);
		fill(0, 150, 255)
		text("Reload to restart", margin, height/2+150, width-2*margin, height/2)
		return;
	}


	// hit test
  for (var i = 0; i < this.numNPC; i++) {
		if (hitTest(fairy, reapers[i])) {
			reapers[i] = new Reaper(random(0, width), height * 1.2);
			// console.log("hit reaper " + i);
			fairy.size = fairy.size - 20 
			if (fairy.size <= 0) {
				gameOver = true;
			}
		}
		if (hitTest(fairy, bubbles[i])) {
			bubbles[i] = new Bubble(random(0, width), height * 1.2)
			// console.log("hit bubble " + i);
			fairy.size = fairy.size + 10 
		}
  }

	// draw
	background(0, 190, 220);
  for (var i = 0; i < this.numNPC; i++) {
    bubbles[i].display();
    bubbles[i].bubbleRise(globalSpeed);
    bubbles[i].bubbleWrap();

    reapers[i].display();
    reapers[i].bubbleRise(globalSpeed);
    reapers[i].bubbleWrap();

    fairy.move();
    fairy.display();
	}

	// update timer
	timer = (millis()/1000).toFixed(3);
	textSize(20);
	text("Time: " + timer, 10, 10, width, height)

	// update speed
	globalSpeed = int(timer) / 4;
	if (globalSpeed < 1) globalSpeed = 1;
}
