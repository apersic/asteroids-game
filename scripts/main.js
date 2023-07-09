const keyboardHandler = new KeyBoardHandler();
const canvasHandler = new CanvasHandler(document.getElementById("canvas"));

let ship = new Ship();

const render = () => {
  // 87 = W
  ship.movingForward = keyboardHandler.keys[87] ?? false;

  // 68 = D
  if (keyboardHandler.keys[68]) {
    ship.rotate(1);
  }
  // 65 = A
  if (keyboardHandler.keys[65]) {
    ship.rotate(-1);
  }

  canvasHandler.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ship.update();
  ship.draw(canvasHandler.context);

  requestAnimationFrame(render);
};

const onLoad = () => {
  canvasHandler.setupCanvas();
  keyboardHandler.handleMultipleKeyPresses();

  render();
};

window.addEventListener("load", onLoad);
