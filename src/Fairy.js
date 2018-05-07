class Fairy {
	// Properties are placed inside of the constructor
	// Constructor runs when an object is first made
	constructor() {
		this.x = 0;
		this.y = 0;
		this.size = 25;
		//this.alpha = random(50, 100)
	}

	display() {
		noStroke();
		fill(255);
		ellipse(this.x, this.y, this.size, this.size)
	}

	move() {
		this.x = mouseX;
		this.y = mouseY;
	}
}