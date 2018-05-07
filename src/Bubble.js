class Bubble {
	// Properties are placed inside of the constructor
	// Constructor runs when an object is first made
	constructor(x, y) {
		this.x = x
		this.y = y
		this.size = random(20, 70);
		this.alpha = random(80, 160)
	}

	display() {
		noStroke();
		fill(76, 102, 214, this.alpha);
		ellipse(this.x, this.y, this.size, this.size)
	}

	bubbleRise(speed) {
		// decrease Y position of each bubbles
		this.y = this.y - speed;
	}

	bubbleWrap() {
		if (this.y < -this.size) {
			this.y = height + this.size;
			this.x = random(0, width);
		}
	}
}