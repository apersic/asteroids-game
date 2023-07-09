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

  renderHeader() {
    const highScore = localStorage.getItem("high-score");

    this.context.font = "21px Arial";
    this.context.fillText("SCORE: " + score.toString(), 20, 35);
    this.context.fillText("LIVES: " + lives.toString(), CANVAS_WIDTH - 105, 35);

    if (highScore) {
      this.context.fillText("HIGH SCORE: " + highScore.toString(), 20, 65);
    }
  }

  renderGameOver() {
    this.context.font = "50px Arial";
    this.context.fillText(
      "GAME OVER",
      CANVAS_WIDTH / 2 - 150,
      CANVAS_HEIGHT / 2
    );
  }

  renderGameOverWithNewHighScore(score) {
    this.renderGameOver();

    this.context.font = "21px Arial";
    this.context.fillText(
      `NEW HIGH SCORE: ${score.toString()}`,
      CANVAS_WIDTH / 2 - 115,
      CANVAS_HEIGHT / 2 - 95
    );
  }
}
