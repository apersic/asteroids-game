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
}
