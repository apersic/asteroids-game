class Asteroid {
  constructor(x, y, radius, level, collisionRadius) {
    this.visible = true;
    this.x = x || Math.floor(Math.random() * CANVAS_WIDTH);
    this.y = y || Math.floor(Math.random() * CANVAS_HEIGHT);
    this.speed = 3;
    this.radius = radius || ASTEROID_RADIUS;
    this.angle = Math.floor(Math.random() * 359);
    this.strokeColor = "white";
    this.level = level || 1;
    this.collisionRadius = collisionRadius || 46;
  }

  handleIsAsteroidOffScreen() {
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

  update() {
    let radians = convertDegreesToRadians(this.angle);

    this.x += Math.cos(radians) * this.speed;
    this.y += Math.sin(radians) * this.speed;

    this.handleIsAsteroidOffScreen();
  }

  draw(context) {
    context.beginPath();

    // It's a hexagon so we divide by 3
    let vertAngle = (Math.PI * 2) / 6;
    let radians = convertDegreesToRadians(this.angle); 

    for (let i = 0; i < 6; i++) {
      context.lineTo(
        this.x - this.radius * Math.cos(vertAngle * i + radians),
        this.y - this.radius * Math.sin(vertAngle * i + radians)
      );
    }

    context.closePath();
    context.stroke();
  }
}
