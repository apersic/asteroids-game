class Bullet {
  constructor(noseX, noseY, angle) {
    this.visible = true;
    this.x = noseX;
    this.y = noseY;
    this.angle = angle;
    this.height = BULLET_HEIGHT;
    this.width = BULLET_WIDTH;
    this.speed = 5;
    this.velocityX = 0;
    this.velocityY = 0;
    this.strokeColor = PLAYER_COLOR;
  }

  isBulletOffScreen() {
    return (
      this.x < this.radius ||
      this.x > CANVAS_WIDTH ||
      this.y < this.radius ||
      this.y > CANVAS_HEIGHT
    );
  }

  update() {
    let radians = convertDegreesToRadians(this.angle);

    this.x -= Math.cos(radians) * this.speed;
    this.y -= Math.sin(radians) * this.speed;
  }

  draw(context) {
    context.fillStyle = this.strokeColor;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
