class CanvasHandler {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  }

  setupCanvas() {
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  createAsteroids(asteroids) {
    // Create 8 asteroids
    for (let i = 0; i < 8; i++) {
      asteroids.push(new Asteroid());
    }
  }

  drawLifeShips(lives) {
    let startX = 1350;
    const startY = 10;
    const points = [
      [9, 9],
      [-9, 9],
    ];

    this.context.strokeStyle = "white";

    for (let i = 0; i < lives; i++) {
      this.context.beginPath();
      this.context.moveTo(startX, startY);

      for (let j = 0; j < points; j++) {
        this.context.lineTo(startX + points[j][0], startY + points[j][1]);
      }

      this.context.closePath();
      this.context.stroke();

      startX -= 30;
    }
  }
}
