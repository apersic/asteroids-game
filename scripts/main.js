const canvasHandler = new CanvasHandler(document.getElementById("canvas"));
const keyboardHandler = new KeyBoardHandler(canvasHandler);

let ship = new Ship();
let bullets = [];
let asteroids = [];

const createAsteroids = () => {
  // Create 8 asteroids
  for (let i = 0; i < 8; i++) {
    bullets.push(new Asteroid());
  }
};

const render = () => {
  canvasHandler.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ship.update();
  ship.draw(canvasHandler.context);

  keyboardHandler.handleMultipleKeyPresses(ship, bullets);
  keyboardHandler.handleMoveShip(ship);

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

  requestAnimationFrame(render);
};

const onLoad = () => {
  canvasHandler.setupCanvas();
  createAsteroids();

  render();
};

window.addEventListener("load", onLoad);
