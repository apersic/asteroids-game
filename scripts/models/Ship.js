class Ship {
  constructor() {
    this.visible = true;
    this.x = CANVAS_WIDTH / 2;
    this.y = CANVAS_HEIGHT / 2;
    this.movingForward = false;
    this.speed = 0.1;
    this.velocityX = 0;
    this.velocityY = 0;
    this.rotationSpeed = 0.001;
    this.radius = 15;
    this.angle = 0;
    this.strokeColor = "white";
    this.noseX = CANVAS_WIDTH / 2 + 15;
    this.noseY = CANVAS_HEIGHT;
  }

  // If the ship goes off screen move it to the opposite side
  handleIsShipOffScreen() {
    if (this.x < this.radius) {
      this.x = CANVAS_WIDTH;
    }
    if (this.x > CANVAS_WIDTH) {
      this.x = this.radius;
    }
    if (this.y < this.radius) {
      this.y = CANVAS_HEIGHT;
    }
    if (this.y > CANVAS_HEIGHT) {
      this.y = this.radius;
    }
  }

  rotate(direction) {
    this.angle += this.rotationSpeed * direction;
  }

  draw(context) {
    context.strokeStyle = this.strokeColor;

    context.beginPath();

    let vertAngle = (Math.PI * 2) / 3;
    let radians = convertDegreesToRadians(this.angle);

    // We need the ship nose position for bullets origin
    this.noseX = this.x - this.radius * Math.cos(radians);
    this.noseY = this.y - this.radius * Math.sin(radians);

    // Up to three points because the shape of the ship has three angles.
    for (let i = 0; i < 3; i++) {
      context.lineTo(
        this.x - this.radius * Math.cos(vertAngle * i + radians),
        this.y - this.radius * Math.sin(vertAngle * i + radians)
      );
    }

    context.closePath();
    context.stroke();
  }

  update() {
    let radians = convertDegreesToRadians(this.angle);

    // Moving the ship
    if (this.movingForward) {
      this.velocityX += Math.cos(radians) * this.speed;
      this.velocityY += Math.sin(radians) * this.speed;
    }

    this.handleIsShipOffScreen();

    // Simulate slowing down
    this.velocityX *= 0.99;
    this.velocityY *= 0.99;

    // Change x & y, while account for air friction
    this.x -= this.velocityX;
    this.y -= this.velocityY;
  }
}
