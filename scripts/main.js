const canvasHandler = new CanvasHandler(document.getElementById("canvas"));
const keyboardHandler = new KeyBoardHandler(canvasHandler);

const highScore = localStorage.getItem("high-score");

let ship = new Ship();
let bullets = [];
let asteroids = [];
let score = 0;
let lives = STARTING_LIVES;

const checkShipCollision = () => {
  if (asteroids.length !== 0) {
    for (let i = 0; i < asteroids.length; i++) {
      if (
        circleCollisionHandler(
          ship.x,
          ship.y,
          11,
          asteroids[i].x,
          asteroids[i].y,
          asteroids[i].collisionRadius
        )
      ) {
        ship.x = CANVAS_WIDTH / 2;
        ship.y = CANVAS_HEIGHT / 2;
        ship.velocityX = 0;
        ship.velocityY = 0;
        lives--;
      }
    }
  }
};

const checkBulletCollision = () => {
  if (asteroids.length !== 0 && bullets.length !== 0) {
    loop1: for (let i = 0; i < asteroids.length; i++) {
      for (let j = 0; j < bullets.length; j++) {
        if (
          circleCollisionHandler(
            bullets[j].x,
            bullets[j].y,
            3,
            asteroids[i].x,
            asteroids[i].y,
            asteroids[i].collisionRadius
          )
        ) {
          if (asteroids[i].level === 1) {
            asteroids.push(
              new Asteroid(asteroids[i].x - 5, asteroids[i].y - 5, 25, 2, 22)
            );
            asteroids.push(
              new Asteroid(asteroids[i].x + 5, asteroids[i].y + 5, 25, 2, 22)
            );
          } else if (asteroids[i].level === 2) {
            asteroids.push(
              new Asteroid(asteroids[i].x - 5, asteroids[i].y - 5, 15, 3, 12)
            );
            asteroids.push(
              new Asteroid(asteroids[i].x + 5, asteroids[i].y + 5, 15, 3, 12)
            );
          }

          asteroids.splice(i, 1);
          bullets.splice(i, 1);

          score += 20;

          break loop1;
        }
      }
    }
  }
};

const renderGameOver = () => {
  ship.visible = false;

  if (score > 0 && (score > parseInt(highScore, 10) || !highScore)) {
    localStorage.setItem("high-score", score.toString());
    canvasHandler.renderGameOverWithNewHighScore(score);
  } else {
    canvasHandler.renderGameOver();
  }
};

const renderGame = () => {
  checkShipCollision();
  checkBulletCollision();

  ship.update();
  ship.draw(canvasHandler.context);

  if (bullets.length !== 0) {
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].update();
      bullets[i].draw(canvasHandler.context);
    }
  }

  if (asteroids.length !== 0) {
    for (let i = 0; i < asteroids.length; i++) {
      asteroids[i].update();
      asteroids[i].draw(canvasHandler.context);
    }
  }
};

const render = () => {
  canvasHandler.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  canvasHandler.context.fillStyle = "white";

  keyboardHandler.handleMultipleKeyPresses(ship, bullets);
  keyboardHandler.handleMoveShip(ship);

  canvasHandler.renderHeader();

  if (lives <= 0) {
    renderGameOver();
  } else {
    renderGame();
  }

  requestAnimationFrame(render);
};

const onLoad = () => {
  canvasHandler.setupCanvas();
  canvasHandler.createAsteroids(asteroids);

  render();
};

window.addEventListener("load", onLoad);
