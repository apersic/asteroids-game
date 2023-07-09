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

  isMouseOverElement(pos, x, y, width, height) {
    return pos.x > x && pos.x < x + width && pos.y < y + height && pos.y > y;
  }

  getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  renderRetryButton(lives) {
    this.context.fillStyle = PLAYER_COLOR;
    this.context.fillText(
      "RETRY",
      CANVAS_WIDTH / 2 - 90,
      CANVAS_HEIGHT / 2 + 100
    );

    this.canvas.addEventListener(
      "click",
      (e) => {
        const mousePos = this.getMousePos(canvas, e);

        if (
          this.isMouseOverElement(
            mousePos,
            CANVAS_WIDTH / 2 - 90,
            CANVAS_HEIGHT / 2 + 100,
            CANVAS_WIDTH / 2 - 90,
            CANVAS_HEIGHT / 2 + 100
          )
        ) {
          console.log("Click!");
          lives = STARTING_LIVES;
        }
      },
      false
    );
  }

  renderHeader() {
    const highScore = localStorage.getItem("high-score");

    this.context.font = "21px Arial";
    this.context.fillText("LIVES: " + lives.toString(), CANVAS_WIDTH - 105, 35);

    if (highScore) {
      this.context.fillText("HIGH SCORE: " + highScore.toString(), 20, 35);
    }

    this.context.font = "50px Arial";
    this.context.fillStyle = PLAYER_COLOR;
    this.context.fillText(score.toString(), CANVAS_WIDTH / 2 - 30, 95);
  }

  renderGameOver(lives) {
    this.context.font = "50px Arial";
    this.context.fillStyle = PRIMARY_COLOR;
    this.context.fillText(
      "GAME OVER",
      CANVAS_WIDTH / 2 - 150,
      CANVAS_HEIGHT / 2
    );

    this.renderRetryButton(lives);
  }

  renderGameOverWithNewHighScore(score, lives) {
    this.renderGameOver(lives);

    this.context.font = "21px Arial";
    this.context.fillStyle = PLAYER_COLOR;
    this.context.fillText(
      `NEW HIGH SCORE: ${score.toString()}`,
      CANVAS_WIDTH / 2 - 115,
      CANVAS_HEIGHT / 2 - 95
    );
  }
}
